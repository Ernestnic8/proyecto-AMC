import {
  ChevronLast,
  ChevronFirst,
  // Sun,
  // Moon,
} from "lucide-react";
import {
  useState,
  useEffect,
  ReactNode,
  createContext,
} from "react";

export const SidebarContext = createContext<{ expanded: boolean }>({ expanded: true });

export default function Sidebar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  return (
    <aside className="h-screen text-black">
      <nav className="h-full flex flex-col bg-white/30 backdrop-blur border-r  shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/image/uni.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <div className="flex gap-2">
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg bg-gray-50  hover:bg-gray-100"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50  hover:bg-gray-100 "
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* <div className="border-t border-white/60 flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div> */}
      </nav>
    </aside>
  );
}
