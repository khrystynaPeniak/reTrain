import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider, THEME_ID, createTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";

import photoUrl from "../../assets/home/girl.jpg";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructors", route: "/instructors" },
  { name: "Programs", route: "/programs" },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    },
  },
});

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  //const [user, setUser] = useState(false);
  const user = true;

  const [navBg, setNavBg] = useState("bg-[#15151580]");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const darkClass = "dark";
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add(darkClass);
    } else {
      root.classList.remove(darkClass);
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsHome(location.pathname === "/");
    setIsLogin(location.pathname === "/login");
    setIsFixed(location.pathname === "/register");
  }, [location]);

  useEffect(() => {
    if (scrollPosition > 100) {
      if (isHome) {
        setNavBg(
          "backdrop-filter backdrop-blur-xl bg-black/0 dark:text-white -text-black" // 1- bg-white
        );
      } else {
        setNavBg("bg-white dark:bg-black dark:text-white text-black");
      }
    } else {
      setNavBg(
        `${
          isHome || location.pathname === "/"
            ? "bg-transparent"
            : "bg-white dark:bg-black "
        } dark:text-white text-white`
      );
    }
  }, [scrollPosition]);

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${
        isHome ? navBg : "bg-white dark:bg-black backdrop-blur-2xl"
      } ${
        isFixed ? "static" : "fixed"
      } top-0 transition-colors duration-500 ease-in-out w-full z-10`}
    >
      <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
        <div className="px-4 py-4 flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="shrink-0 cursor-pointer pl-7 md:p-0 flex items-center"
          >
            <div>
              <h1 className="text-3xl inline-flex gap-3 items-center font-bold">
                RecoverMove
              </h1>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-hidden"
            >
              <FaBars className="h-6 w-6 hover:text-lime-400" />
            </button>
          </div>
          <div className="hidden md:block text-black dark:text-white">
            <div className="flex">
              <ul className="ml-10 flex items-center [&>*+*]:ml-4 pr-4">
                {navLinks.map((link) => (
                  <li key={link.route}>
                    <NavLink
                      to={link.route}
                      style={{ whiteSpace: "nowrap" }}
                      className={({ isActive }) =>
                        `font-medium ${
                          isActive
                            ? "text-lime-400"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-lime-400 duration-300`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}

                {user ? null : isLogin ? (
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        `font-medium ${
                          isActive
                            ? "text-lime-400"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-lime-400 duration-300`
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `font-medium ${
                          isActive
                            ? "text-lime-400"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-lime-400 duration-300`
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                )}

                {/*{user && (
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `font-medium ${
                          isActive
                            ? "text-lime-400"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-lime-400 duration-300`
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}*/}

                {user && (
                  <li>
                    <NavLink to="/profile">
                      <img
                        src={photoUrl}
                        alt="/"
                        className="h-[40px] rounded-full w-[40px]"
                      />
                    </NavLink>
                  </li>
                )}

                {user && (
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      className={
                        "font-bold px-3 py-2 bg-lime-400 text-white rounded-xl"
                      }
                    >
                      Logout
                    </NavLink>
                  </li>
                )}

                <li>
                  <ThemeProvider theme={theme}>
                    <div className="flex flex-col justify-center items-center">
                      <Switch onChange={() => setIsDarkMode(!isDarkMode)} />
                    </div>
                  </ThemeProvider>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
