import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ObjectDefault } from "../../../shared/types";
import axios from "axios";
import { Loader } from "../../../shared/ui/Loader";
import { Card, Flex, Typography } from "antd";
import { convertDataTime } from "../../../shared/utils/convertDataTime.ts";

export const CharacterPage = () => {
  const [character, setCharacter] = useState<ObjectDefault | null>();
  const { characterId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/character/${characterId}`
    })
      .then(res => {
        setCharacter(res.data);
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

  if (loading || !character) return <Loader />;
  if (error) return <div className="text-red-500">Error!</div>;

  return (
    <>
      <Card hoverable styles={{ body: { padding: 0, overflow: "hidden" } }}>
        <Flex>
          <img alt={character.name} src={character.image} />

          <Flex vertical style={{ padding: 32 }}>
            <Typography.Title level={3}>{character.name}</Typography.Title>
            <ul className="flex flex-col gap-2">
              {Object.keys(character).map(field => {
                if (field !== "image" && typeof character[field] === "string") {
                  if (field === "created") {
                    return (
                      <li key={field}>
                        <b>{field}:</b>{" "}
                        <span>{convertDataTime(character[field])}</span>
                      </li>
                    );
                  }
                  return (
                    <li key={field}>
                      <b>{field}:</b> <span>{character[field]}</span>
                    </li>
                  );
                }
              })}
            </ul>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};
