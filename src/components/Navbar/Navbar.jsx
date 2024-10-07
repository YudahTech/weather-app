import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavbarStyles..module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <nav>
      <div className={styles.logo}>
        <h3>Yudah Tech</h3>
      </div>
      <div className={styles.navLinks}>
        <button>
          <NavLink to="/" exact activeClassName={styles.active}>
            Home
          </NavLink>
        </button>
        <button>
          <NavLink to="/news" activeClassName={styles.active}>
            News
          </NavLink>
        </button>
        <button>
          <NavLink to="/live" activeClassName={styles.active}>
            Live cameras
          </NavLink>
        </button>
        <button>
          <NavLink to="/photos" activeClassName={styles.active}>
            Photos
          </NavLink>
        </button>
        <button>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contact
          </NavLink>
        </button>
      </div>

      <div className={styles.hamburgerMenu} onClick={toggleDropdown}>
        &#9776;
      </div>
      <div
        className={`${styles.dropDown} ${isDropdownOpen ? styles.open : ""}`}
      >
        <button>
          <NavLink to="/" exact activeClassName={styles.active}>
            Home
          </NavLink>
        </button>
        <button>
          <NavLink to="/news" activeClassName={styles.active}>
            News
          </NavLink>
        </button>
        <button>
          <NavLink to="/live" activeClassName={styles.active}>
            Live cameras
          </NavLink>
        </button>
        <button>
          <NavLink to="/photos" activeClassName={styles.active}>
            Photos
          </NavLink>
        </button>
        <button>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contact
          </NavLink>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
