import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import { SidebarItem } from "./Components/SideBarItem";
import HomeIcon from '@mui/icons-material/Home';
import RawOnIcon from '@mui/icons-material/RawOn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AmcRouter from "./routes/AmcRouter";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarItem
            icon={<HomeIcon fontSize="small" />}
            text="Inicio"
            to="/"
          />
          <SidebarItem
            icon={<RawOnIcon fontSize="small" />}
            text="raw"
            subRoutes={["/raw", "/raw/uso-edicion", "/raw/ventajas-y-des"]}
          >
            <SidebarItem
              icon={<QuestionMarkIcon fontSize="small" />}
              text="Que es RAW"
              to="/raw"
            />
            <SidebarItem
              icon={<CreateIcon fontSize="small" />}
              text="Uso y Edición"
              to="/raw/uso-edicion"
            />
            <SidebarItem
              icon={<><AddIcon fontSize="small" /><RemoveIcon fontSize="small" /></>}
              text="Ventajas y Desventajas"
              to="/raw/ventajas-y-des"
            />
          </SidebarItem>
        </Sidebar>
        <main className="flex-1 p-4 overflow-y-auto text-black dark:text-white">
          <AmcRouter />
        </main>
      </div>
    </Router>
  );
};

export default App;
