import ArchitectureOrganization from "@pages/Microprocesadores/ArchitectureOrganization";
import Buses from "@pages/Microprocesadores/Buses";
import DirectionMode from "@pages/Microprocesadores/DirectionMode";
import ExecutionCycle from "@pages/Microprocesadores/ExecutionCycle";
import InternalArchitecture from "@pages/Microprocesadores/InternalArchitecture";
import Introduction from "@pages/Microprocesadores/Introduction";
import Registros from "@pages/Microprocesadores/Registros";
import StructurePC from "@pages/Microprocesadores/StructurePC";
import Assambler from "@pages/ProgrammingLanguaje/Assembler";
import { Route, Routes } from "react-router-dom";

const MicroprocessorRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/arquitectura" element={<ArchitectureOrganization />} />
      <Route path="/estructura-pc" element={<StructurePC />} />
      <Route path="/estructura-interna" element={<InternalArchitecture />} />
      <Route path="/registros" element={<Registros />} />
      <Route path="/buses" element={<Buses />} />
      <Route path="/ciclo-ejecucion" element={<ExecutionCycle />} />
      <Route path="/modo-direccion" element={<DirectionMode />} />
      <Route path="/ensamblador" element={<Assambler />} />
    </Routes>
  );
};

export default MicroprocessorRouter;
