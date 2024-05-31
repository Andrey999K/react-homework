import useSort from "../../../hooks/useSort";
import { useGetListItems } from "../../../hooks/useGetListItems";
import { Location, OnChangeTable } from "../../../types";
import { Button, Table } from "antd";
import { SortOrder } from "antd/es/table/interface";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { convertDataTime } from "../../../utils/convertDataTime.ts";
import { Loader } from "../../../components/common/Loader";

export const LocationsList = () => {
  const { sortByCreated, handlerToggle } = useSort("ASC");
  const {
    loading,
    listItems: locations,
    lastNodeRef
  } = useGetListItems<Location>("location");

  const sortOrderCreated: SortOrder = useMemo(() => {
    switch (sortByCreated) {
      case "ASC":
        return "ascend";
      default:
        return "descend";
    }
  }, [sortByCreated]);

  const handlerChange: OnChangeTable<Location> = (
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
      render: (_: any, { id, name }: Location, index: number) => {
        if (index === locations.length - 1) {
          return (
            <Link
              ref={lastNodeRef}
              to={`/locations/${id}`}
              className="w-full block"
            >
              {name}
            </Link>
          );
        }
        return (
          <Link to={`/locations/${id}`} className="w-full block">
            {name}
          </Link>
        );
      }
    },
    {
      title: "Created",
      dataIndex: "created",
      sorter: (a: Location, b: Location) => {
        return (new Date(a.created) as any) - (new Date(b.created) as any);
      },
      sortOrder: sortOrderCreated,
      sortDirections: ["ascend", "descend", "ascend"] as SortOrder[],
      render: (_: any, { id, created }: Location) => (
        <Link to={`/locations/${id}`} className="w-full block">
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
      {!!locations.length && (
        <Table
          dataSource={locations}
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
