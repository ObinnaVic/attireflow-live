import { Footer, Nav } from "components/index";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.css";

function Layout() {
  return (
    <div className={classes.layout}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
