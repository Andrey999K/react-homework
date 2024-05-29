import { Link } from "react-router-dom";
import useSort from "../../../hooks/useSort";
import { convertDataTime } from "../../../utils/convertDataTime";
import { useGetListItems } from "../../../hooks/useGetListItems";
import { Episode } from "../../../types";
import { Button, Spin, Table, TableProps } from "antd";
import { useMemo } from "react";
import { SortOrder } from "antd/es/table/interface";

type OnChange = NonNullable<TableProps<Episode>["onChange"]>;

export const EpisodesList = () => {
  const { sortByCreated, handlerToggle } = useSort("ASC");
  const { loading, listItems: episodes } = useGetListItems<Episode>(
    "https://rickandmortyapi.com/api/episode"
  );

  const sortOrderCreated: SortOrder = useMemo(() => {
    switch (sortByCreated) {
      case "ASC":
        return "ascend";
      default:
        return "descend";
    }
  }, [sortByCreated]);

  console.log(sortOrderCreated);

  const handlerChange: OnChange = (_pagination, _filters, sorter) => {
    if ("field" in sorter && sorter.field === "created") {
      handlerToggle();
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_: any, { id, name }: Episode) => (
        <Link to={`/episodes/${id}`} className="w-full block">
          {name}
        </Link>
      )
    },
    {
      title: "Created",
      dataIndex: "created",
      sorter: (a: Episode, b: Episode) => {
        return (new Date(a.created) as any) - (new Date(b.created) as any);
      },
      sortOrder: sortOrderCreated,
      sortDirections: ["ascend", "descend", "ascend"] as SortOrder[],
      render: (_: any, { id, created }: Episode) => (
        <Link to={`/episodes/${id}`} className="w-full block">
          {convertDataTime(created)}
        </Link>
      )
    }
  ];
  return (
    <div>
      {loading && (
        <div className="fixed inset-0 bg-white/70 flex justify-center items-center">
          <Spin size="large" />
        </div>
      )}
      <Button type="primary" onClick={handlerToggle}>
        {sortByCreated}
      </Button>
      {!!episodes.length && (
        <Table
          dataSource={episodes}
          columns={columns}
          className="mt-5"
          pagination={false}
          rowKey="id"
          onChange={handlerChange}
        />
      )}
    </div>
  );
};
