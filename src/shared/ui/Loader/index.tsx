import { Spin } from "antd";

export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/70 flex justify-center items-center z-[9999]">
      <Spin size="large" />
    </div>
  );
};
