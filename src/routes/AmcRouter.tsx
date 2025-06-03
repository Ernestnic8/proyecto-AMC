import { Route, Routes } from "react-router-dom";
import Inicio from "@pages/Inicio";
import RawInicio from "@pages/Raw/RawInicio";
import RawUsoYEditar from "@pages/Raw/RawUsoYEditar";
import RawVenDes from "@pages/Raw/RawVenDes";
import MicroprocessorRouter from "./MicroprocessorRouter";

const AmcRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="p-6 bg-red-600/70 rounded-lg h-full shadow-lg flex items-center justify-center">
            <p className="text-center text-5xl font-bold uppercase">
              Pagina No disponible
            </p>
          </div>
        }
      />
      <Route path="/" element={<Inicio />} />
      <Route path="/raw" element={<RawInicio />} />
      <Route path="/raw/uso-edicion" element={<RawUsoYEditar />} />
      <Route path="/raw/ventajas-y-des" element={<RawVenDes />} />
      <Route path="/microprocesadores/*" element={<MicroprocessorRouter />} />
      
    </Routes>
  );
};

export default AmcRouter;
