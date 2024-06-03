import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { convertDataTime } from "../../../shared/utils/convertDataTime";
import useSort from "../../../shared/lib/hooks/useSort";
import { useGetListItems } from "../../../shared/lib/hooks/useGetListItems";
import { Character, OnChangeTable } from "../../../shared/types";
import { Button, Table } from "antd";
import { SortOrder } from "antd/es/table/interface";
import { Loader } from "../../../shared/ui/Loader";

export const CharactersList: React.FC = () => {
  const { sortByCreated, handlerToggle } = useSort();
  const {
    loading,
    listItems: charactersList,
    lastNodeRef
  } = useGetListItems<Character>("character");

  const sortOrderCreated: SortOrder = useMemo(() => {
    switch (sortByCreated) {
      case "ASC":
        return "ascend";
      default:
        return "descend";
    }
  }, [sortByCreated]);

  const handlerChange: OnChangeTable<Character> = (
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
      title: "Image",
      dataIndex: "image",
      render: (_: any, { id, name, image }: Character) => (
        <Link to={`/characters/${id}`} className="w-full block">
          <img
            className="w-full h-wull max-w-[50px] max-h-[50px]"
            src={image}
            alt={name}
          />
        </Link>
      )
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (_: any, { id, name }: Character, index: number) => {
        if (index === charactersList.length - 1) {
          return (
            <Link
              ref={lastNodeRef}
              to={`/characters/${id}`}
              className="w-full block"
            >
              {name}
            </Link>
          );
        }
        return (
          <Link to={`/characters/${id}`} className="w-full block">
            {name}
          </Link>
        );
      }
    },
    {
      title: "Created",
      dataIndex: "created",
      sorter: (a: Character, b: Character) => {
        return (new Date(a.created) as any) - (new Date(b.created) as any);
      },
      sortOrder: sortOrderCreated,
      sortDirections: ["ascend", "descend", "ascend"] as SortOrder[],
      render: (_: any, { id, created }: Character) => (
        <Link to={`/characters/${id}`} className="w-full block">
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
      {!!charactersList.length && (
        <Table
          dataSource={charactersList}
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
