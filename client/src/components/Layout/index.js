import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import "./index.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="content-area">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
