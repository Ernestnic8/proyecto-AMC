import { useContext, useState, useEffect, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { SidebarContext } from "./SideBar";

type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  to?: string;
  alert?: boolean;
  children?: ReactNode;
  subRoutes?: string[];
};

export function SidebarItem({
  icon,
  text,
  to,
  alert,
  children,
  subRoutes = [],
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const hasChildren = !!children;

  // Detectar ruta activa dentro del submenu
  useEffect(() => {
    const isSubRouteActive = subRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    if (isSubRouteActive) {
      setOpen(true);
    }
  }, [location.pathname, subRoutes]);

  const handleClick = () => {
    if (hasChildren) setOpen(!open);
  };

  const itemContent = (
    <div
      onClick={handleClick}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md transition-colors group cursor-pointer
        hover:bg-indigo-50 dark:hover:bg-indigo-800 text-gray-600 dark:text-gray-300
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "ml-3 w-48" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {hasChildren && expanded && (
        <span className="ml-auto transition-transform">
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </span>
      )}
    </div>
  );

  return (
    <li className="flex flex-col">
      {to ? <NavLink to={to}>{itemContent}</NavLink> : itemContent}

      {hasChildren && (
        <ul
          className={`
            overflow-hidden transition-all duration-300 pl-12 text-sm
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {children}
        </ul>
      )}
    </li>
  );
}
