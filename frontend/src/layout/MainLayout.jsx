import { Outlet } from "react-router-dom";
import NavBar from "../components/headers/NavBar";
import Footer from "../components/footers/Footer";
import Newsletter from "../components/Newsletter/Newsletter";

const MainLayout = () => {
  return (
    <main className="dark:bg-black overflow-hidden">
      <NavBar />
      <Outlet />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default MainLayout;
