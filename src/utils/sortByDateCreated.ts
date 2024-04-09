import { SortedDirection } from "../types";

const sortByDateCreated = <T extends Array<{ created: string }>>(data: T, direction?: SortedDirection): T => {
  return data.sort((a, b) => {
    if (!direction || direction === "DESC") return (new Date(b.created) as any) - (new Date(a.created) as any);
    return (new Date(a.created) as any) - (new Date(b.created) as any);
  });
};

export default sortByDateCreated;
