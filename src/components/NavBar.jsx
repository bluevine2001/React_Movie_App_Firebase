import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [burgerClass, setBurgerClass] = useState("navbar-burger");
  const [menuBurgerClass, setMenuBurgerClass] = useState("navbar-burger");
  const showMenuHandler = () => {
    console.log(isActive);
    setIsActive(!isActive);
    if (isActive) {
      setBurgerClass("navbar-burger is-active");
      setMenuBurgerClass("navbar-menu is-active");
    } else {
      setBurgerClass("navbar-burger");
      setMenuBurgerClass("navbar-menu");
    }
  };
  return (
    <header className="mb-6">
      <nav className="navbar is-fixed-top is-link">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h2 className={styles.brandtitle}>Movies</h2>
          </div>

          <a
            role="button"
            className={burgerClass}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            id="navbar-burger"
            onClick={showMenuHandler}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={menuBurgerClass}>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/add" className={styles.routerlink}>
                Ajouter un film
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/" className={styles.routerlink}>
                Liste de films
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
