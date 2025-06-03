import {
  ChevronLast,
  ChevronFirst,
  Sun,
  Moon,
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
              expanded ? "w-32" : "w-15"
            }`}
            alt=""
          />
          <div className="flex gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg bg-gray-50  hover:bg-gray-100"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50  hover:bg-gray-100 transition-transform duration-200 ease-in-out"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}
