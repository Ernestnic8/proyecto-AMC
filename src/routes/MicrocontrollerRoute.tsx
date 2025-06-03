import { Route, Routes } from "react-router-dom";

const MicrocontrollerRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>j</h1>} />
      <Route path="/j" element={<h1>j2</h1>} />
      <Route path="/p" element={<h1>j3</h1>} />
    </Routes>
  );
};

export default MicrocontrollerRoute;
