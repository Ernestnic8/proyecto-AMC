import { Route, Routes } from "react-router-dom";
import Assambler from "@pages/ProgrammingLanguaje/Assembler";

const AssamblerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Assambler />} />
    </Routes>
  );
};

export default AssamblerRouter;
