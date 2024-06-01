import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Episode, ObjectDefault } from "../../../types";
import axios from "axios";
import { Table } from "antd";
import { convertDataTime } from "../../../utils/convertDataTime.ts";
import { Loader } from "../../../shared/Loader";

export const EpisodePage = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState<ObjectDefault | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/episode/${episodeId}`
    })
      .then(res => {
        setEpisode(res.data);
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

  if (loading || !episode) return <Loader />;
  if (error) return <div className="text-red-500">Error!</div>;

  const columns = Object.keys(episode)
    .filter(field => typeof episode[field] === "string")
    .map(field => {
      if (field === "created") {
        return {
          title: field,
          dataIndex: field,
          render: (_: any, { created }: Episode) => (
            <>{convertDataTime(created)}</>
          )
        };
      }
      return { title: field, dataIndex: field };
    });

  return (
    <div className="flex flex-col gap-8 mt-8">
      <h2 className="font-bold">Эпизод {episode.name}</h2>
      <Table
        columns={columns}
        dataSource={[episode as Episode]}
        pagination={false}
      />
    </div>
  );
};
