//import uni from "../public/image/uni.png"
import Sidebar, { SidebarItem } from "./Components/SideBar";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const App = () => {
  return (
    <main className="flex h-screen w-[10%]">
      <Sidebar>
        <SidebarItem
          icon={<AccountBalanceWalletIcon fontSize="small" />}
          text="compra"
          active
        />
      </Sidebar>
    </main>
  );
};

export default App;
