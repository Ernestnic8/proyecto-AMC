import React from "react";

const ListDisc = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-disc list-inside text-gray-700 space-y-2 dark:text-gray-200">
      {children}
    </ul>
  );
};

export default ListDisc;
