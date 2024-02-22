import { Outlet } from "react-router-dom";

// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

function View() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default View;
