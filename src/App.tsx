import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import { SidebarItem } from "./Components/SideBarItem";
import {
  Home,
  Memory,
  Article,
  Computer,
  Devices,
  AccountTree,
  FastForward,
  ControlCamera,
  Dns,
  Usb,  
} from "@mui/icons-material";
import AmcRouter from "./routes/AmcRouter";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarItem icon={<Home fontSize="small" />} text="Inicio" to="/" />
          <SidebarItem
            icon={<Devices fontSize="small" />}
            text="Unidades"
            subRoutes={[
              "/unidades",
            ]}
          >
            <SidebarItem
              icon={
                <Computer fontSize="small" />
              }
              text="Unidad 1"
              to="/unidades/unidad-1"
            />
            <SidebarItem
              icon={
                <Memory fontSize="small" />
              }
              text="Unidad 2"
              to="/unidades/unidad-2"
            />
            <SidebarItem
              icon={
                <AccountTree fontSize="small" />
              }
              text="Unidad 3"
              to="/unidades/unidad-3"
            />
            <SidebarItem
              icon={
                <FastForward fontSize="small" />
              }
              text="Unidad 4"
              to="/unidades/unidad-4"
            />
            <SidebarItem
              icon={
                <ControlCamera fontSize="small" />
              }
              text="Unidad 5"
              to="/unidades/unidad-5"
            />
            <SidebarItem
              icon={
                <Dns fontSize="small" />
              }
              text="Unidad 6"
              to="/unidades/unidad-6"
            />
            <SidebarItem
              icon={
                <Usb fontSize="small" />
              }
              text="Unidad 7"
              to="/unidades/unidad-7"
            />
            
          </SidebarItem>
          <SidebarItem
            icon={<Article fontSize="small" />}
            text="Referencias"
            to="/referencias"
          />
        </Sidebar>
        <main className="flex-1 p-4 overflow-y-auto text-black dark:text-white">
          <AmcRouter />
        </main>
      </div>
    </Router>
  );
};

export default App;
