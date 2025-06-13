import { ReactNode } from "react";

const SubText = ({children}: {children : ReactNode}) => {
  return (
    <h1 className="text-2xl text-blue-900 font-bold text-center mb-2 dark:text-blue-400">
      {children}
    </h1>
  );
};

export default SubText;
