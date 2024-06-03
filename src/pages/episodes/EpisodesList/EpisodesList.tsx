import { Link } from "react-router-dom";
import useSort from "../../../shared/lib/hooks/useSort";
import { convertDataTime } from "../../../shared/utils/convertDataTime";
import { useGetListItems } from "../../../shared/lib/hooks/useGetListItems";
import { Episode, OnChangeTable } from "../../../shared/types";
import { Button, Table } from "antd";
import { useMemo } from "react";
import { SortOrder } from "antd/es/table/interface";
import { Loader } from "../../../shared/ui/Loader";

export const EpisodesList = () => {
  const { sortByCreated, handlerToggle } = useSort("ASC");
  const {
    loading,
    listItems: episodes,
    lastNodeRef
  } = useGetListItems<Episode>("episode");

  const sortOrderCreated: SortOrder = useMemo(() => {
    switch (sortByCreated) {
      case "ASC":
        return "ascend";
      default:
        return "descend";
    }
  }, [sortByCreated]);

  const handlerChange: OnChangeTable<Episode> = (
    _pagination,
    _filters,
    sorter
  ) => {
    if ("field" in sorter && sorter.field === "created") {
      handlerToggle();
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_: any, { id, name }: Episode, index: number) => {
        if (index === episodes.length - 1) {
          return (
            <Link
              ref={lastNodeRef}
              to={`/episodes/${id}`}
              className="w-full block"
            >
              {name}
            </Link>
          );
        }
        return (
          <Link to={`/episodes/${id}`} className="w-full block">
            {name}
          </Link>
        );
      }
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
      {loading && <Loader />}
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
