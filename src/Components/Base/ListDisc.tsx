import React from "react";

const ListDisc = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {children}
    </ul>
  );
};

export default ListDisc;
