import React from "react";
import { convertDataTime } from "../../../utils/convertDataTime";
import { Link } from "react-router-dom";
import { ListItemData } from "../../../types";

interface ListItemProps {
  data: ListItemData;
  lastNodeRef?: (node: HTMLElement) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ data, lastNodeRef }) => {
  return (
    <li ref={lastNodeRef || null}>
      <Link to={data.url} className="flex items-center gap-5">
        {"image" in data && (
          <img
            className="w-full h-wull max-w-[50px] max-h-[50px]"
            src={data.image}
            alt={data.name}
          />
        )}
        <span className="w-full max-w-[300px]">{data.name}</span>
        <span className="w-full max-w-[300px]">
          {convertDataTime(data.created)}
        </span>
      </Link>
    </li>
  );
};
