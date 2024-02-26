export const convertDataTime = (dateTime: string) => {
  return `${new Date(dateTime).toLocaleDateString()}, ${new Date(dateTime).toLocaleTimeString()}`;
};
