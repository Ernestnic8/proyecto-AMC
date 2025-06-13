import { Route, Routes } from "react-router-dom";
import Assambler from "@pages/ProgrammingLanguaje/Assembler";
import Instruccion from "@pages/ProgrammingLanguaje/Instruccion";
import ControlStructure from "@pages/ProgrammingLanguaje/ControlStructure";

const AssamblerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Assambler />} />
      <Route path="/instruccion" element={<Instruccion />} />
      <Route path="/estructura-control" element={<ControlStructure />} />
    </Routes>
  );
};

export default AssamblerRouter;
