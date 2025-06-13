import { Route, Routes } from "react-router-dom";
import Inicio from "@pages/Inicio";
import NotFound from "@pages/NotFound";
import MicroprocessorRouter from "./MicroprocessorRouter";
import MicrocontrollerRoute from "./MicrocontrollerRoute";
import DifferenceRoute from "./DifferenceRoute";
import AssamblerRouter from "./AssamblerRouter";

const AmcRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/ensamblador/*" element={<AssamblerRouter />} />
      <Route path="/microprocesadores/*" element={<MicroprocessorRouter />} />
      <Route path="/microcontrolador/*" element={<MicrocontrollerRoute />} />
      <Route path="/mprocess-vs-mcontroller/*" element={<DifferenceRoute />} />
    </Routes>
  );
};

export default AmcRouter;
