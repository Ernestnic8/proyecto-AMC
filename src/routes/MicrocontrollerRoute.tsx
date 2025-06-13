import Aplicaciones from "@pages/Microcontroladores/Aplicaciones";
import ComunicaciónSerial from "@pages/Microcontroladores/ComunicacionSerial";
import Introduction from "@pages/Microcontroladores/Introduction";
import PuertosIO from "@pages/Microcontroladores/PuertosIO";
import StructureMC from "@pages/Microcontroladores/StructureMC";
import { Route, Routes } from "react-router-dom";
import TemporizadoresControl from '@pages/Microcontroladores/TemporizadoresControl';

const MicrocontrollerRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Introduction/>} />
      <Route path="/aplicaciones" element={<Aplicaciones/>} />
      <Route path="/comunicacion" element={<ComunicaciónSerial/>} />
      <Route path="/puerto-io" element={<PuertosIO/>} />
      <Route path="/estructura" element={<StructureMC/>} />
      <Route path="/temporizadores-control" element={<TemporizadoresControl/>} />
    </Routes>
  );
};

export default MicrocontrollerRoute;
