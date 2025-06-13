import { ReactNode } from "react";

const TinyText = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-extrabold text-gray-600 mb-5 dark:text-gray-300">{children}</h3>;
};

export default TinyText;
