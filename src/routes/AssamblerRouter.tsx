import { Route, Routes } from "react-router-dom";
import Assambler from "@pages/ProgrammingLanguaje/Assembler";
import Instruccion from "@pages/ProgrammingLanguaje/Instruccion";

const AssamblerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Assambler />} />
      <Route path="/instruccion" element={<Instruccion />} />
    </Routes>
  );
};

export default AssamblerRouter;
