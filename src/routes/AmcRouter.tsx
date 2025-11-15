import { Route, Routes } from "react-router-dom";
import Inicio from "@pages/Inicio";
import NotFound from "@pages/NotFound";
import UnidadesRoute from "./Unidades.route";
import References from "@pages/References";

const AmcRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/unidades/*" element={<UnidadesRoute />} />
      <Route path="/referencias" element={<References />} />
    </Routes>
  );
};

export default AmcRouter;
