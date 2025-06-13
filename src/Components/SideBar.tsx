import {
  ChevronLast,
  ChevronFirst,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import {
  useState,
  useEffect,
  ReactNode,
  createContext,
} from "react";

export const SidebarContext = createContext<{ expanded: boolean }>({
  expanded: true,
});

export default function Sidebar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const showExpanded = expanded || hovering || (isMobile && mobileOpen);

  const handleMenuItemClick = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-700 dark:bg-gray-700 text-white rounded"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X /> : <Menu />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen z-40 transition-all duration-300
        ${showExpanded ? "w-64" : "w-20"}
        ${isMobile && !mobileOpen ? "hidden" : ""}
        bg-white/50 dark:bg-gray-900/30 backdrop-blur-md border-r border-white/50 dark:border-gray-800 shadow-lg
      `}
        onMouseEnter={() => !isMobile && setHovering(true)}
        onMouseLeave={() => !isMobile && setHovering(false)}
      >
        <nav className="h-full flex flex-col">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src={"/image/unilogo.png"}
              className={`transition-all ${showExpanded ? "w-20" : "w-10"}`}
              alt="Logo"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-1.5 rounded-lg bg-blue-700 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-gray-600"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="hidden md:block p-1.5 rounded-lg bg-blue-700 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-gray-600"
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>
          </div>

          <SidebarContext.Provider value={{ expanded: showExpanded }}>
            <ul
              className="flex-1 px-3 text-black dark:text-white overflow-y-auto"
              onClick={handleMenuItemClick}
            >
              {children}
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  );
}
