import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../../components/navbar/navbar.component";
import FooterComponent from "../../components/footer/footer.component";
const Navbar = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <NavbarComponent />
        </nav>
      </header>
      <Outlet />
      <FooterComponent />
    </Fragment>
  );
};

export default Navbar;
