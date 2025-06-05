import Differences from "@pages/DiferenciaMicroProcess&Controller/Differences";
import { Route, Routes } from "react-router-dom";

const DifferenceRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Differences />} />
      <Route path="/j" element={<h1>j2</h1>} />
      <Route path="/p" element={<h1>j3</h1>} />
    </Routes>
  );
};

export default DifferenceRoute;
