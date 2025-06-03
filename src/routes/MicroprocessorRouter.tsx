import ArchitectureOrganization from "@pages/Microprocesadores/ArchitectureOrganization";
import Introduction from "@pages/Microprocesadores/Introduction";
import StructurePC from "@pages/Microprocesadores/StructurePC";
import { Route, Routes } from "react-router-dom";

const MicroprocessorRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/arquitectura" element={<ArchitectureOrganization />} />
      <Route path="/estructura-pc" element={<StructurePC />} />
    </Routes>
  );
};

export default MicroprocessorRouter;
