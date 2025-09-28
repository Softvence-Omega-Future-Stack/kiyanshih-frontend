import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const { pathname } = useLocation();

  const hidePaths = ["/login", "/client-signup", "/provider-signup"];

  const shouldShowNavbar =
    !hidePaths.includes(pathname) &&
    pathname !== "/dashboard" &&
    !pathname.startsWith("/dashboard/");

  return (
    <div>
      <main>
        {shouldShowNavbar && <Navbar />}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
