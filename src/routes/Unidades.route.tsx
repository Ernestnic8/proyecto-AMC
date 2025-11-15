import { Unidad1, Unidad2, Unidad3, Unidad4, Unidad5, Unidad6, Unidad7 } from "@pages/Unidades";
import { Route, Routes } from "react-router-dom";

const UnidadesRoute = () => {
  return (
    <Routes>
      <Route path="/unidad-1" element={<Unidad1 />} />
      <Route path="/unidad-2" element={<Unidad2 />} />
      <Route path="/unidad-3" element={<Unidad3 />} />
      <Route path="/unidad-4" element={<Unidad4 />} />
      <Route path="/unidad-5" element={<Unidad5 />} />
      <Route path="/unidad-6" element={<Unidad6 />} />
      <Route path="/unidad-7" element={<Unidad7 />} />
    </Routes>
  );
};

export default UnidadesRoute;
