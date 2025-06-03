import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import { SidebarItem } from "./Components/SideBarItem";
import { Home, Memory, DeveloperBoard, Difference } from "@mui/icons-material";
import AmcRouter from "./routes/AmcRouter";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarItem icon={<Home fontSize="small" />} text="Inicio" to="/" />
          <SidebarItem
            icon={<Memory fontSize="small" />}
            text="Microprocesadores"
            subRoutes={[
              "/microprocesadores",
              "/microprocesadores/arquitectura",
              "/raw/ventajas-y-des",
            ]}
          >
            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              }
              text="Introduccion"
              to="/microprocesadores"
            />
            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
                  />
                </svg>
              }
              text="Arquitectura y Organización"
              to="/microprocesadores/arquitectura"
            />

            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
              }
              text="Estructura de la PC"
              to="/microprocesadores/estructura-pc"
            />
          </SidebarItem>
          <SidebarItem
            icon={<DeveloperBoard fontSize="small" />}
            text="Microcontroladores"
            subRoutes={[
              "/microprocesadores",
              "/microprocesadores/arquitectura",
              "/raw/ventajas-y-des",
            ]}
          >
            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              }
              text="Introduccion"
              to="/microprocesadores"
            />
          </SidebarItem>
          <SidebarItem
            icon={<Difference fontSize="small" />}
            text="Diferencias entre Microprocesadores y Microcontroladores"
            subRoutes={[
              "/microprocesadores",
              "/microprocesadores/arquitectura",
              "/raw/ventajas-y-des",
            ]}
          >
            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              }
              text="Introduccion"
              to="/microprocesadores"
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
