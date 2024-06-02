import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Location, ObjectDefault } from "../../../shared/types";
import axios from "axios";
import { Loader } from "../../../shared/ui/Loader";
import { convertDataTime } from "../../../shared/utils/convertDataTime.ts";
import { Table } from "antd";

export const LocationPage = () => {
  const { locationId } = useParams();
  const [location, setLocation] = useState<ObjectDefault | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/location/${locationId}`
    })
      .then(res => {
        setLocation(res.data);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(true);
        console.log(e);
      });
  }, []);

  if (loading || !location) return <Loader />;
  if (error) return <div className="text-red-500">Error!</div>;

  const columns = Object.keys(location)
    .filter(field => typeof location[field] === "string")
    .map(field => {
      if (field === "created") {
        return {
          title: field,
          dataIndex: field,
          render: (_: any, { created }: Location) => (
            <>{convertDataTime(created)}</>
          )
        };
      }
      return { title: field, dataIndex: field };
    });

  return (
    <ul className="flex flex-col gap-8 mt-8">
      <h2 className="font-bold">Локация {location.name}</h2>
      <Table
        columns={columns}
        dataSource={[location as Location]}
        pagination={false}
      />
    </ul>
  );
};
