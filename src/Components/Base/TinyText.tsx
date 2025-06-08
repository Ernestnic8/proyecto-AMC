import { ReactNode } from "react";

const TinyText = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-bold text-gray-600 mb-5">{children}</h3>;
};

export default TinyText;
