import { ReactNode } from "react";

const ListDecimal = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="list-decimal list-inside text-gray-700 space-y-2">
      {children}
    </ul>
  );
};

export default ListDecimal;
