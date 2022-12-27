import { useEffect, useState } from "react";
import logo from "./media/2.png";
import "./styles/nav-bar.css";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [passed, setPassed] = useState(false);
  const [show, setShow] = useState(false);
  const handleShowLinks = () => {
    show ? setShow(false) : setShow(true);
  };
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 180) {
        setPassed(true);
      } else {
        setPassed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={!passed ? "nav-bar transparent" : "nav-bar"}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={logo}
              //   style={{ width: "50px" }}
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {/* Obssesion */}
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Mapa
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleShowLinks}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={show ? "sub-menus" : "sub-menus-hidden"}
            id="navbar-sticky"
          >
            <ul className={!passed ? "transparent-link" : "nav-mns"}>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-base"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="link-txt">
                  Experiencias
                </a>
              </li>
              <li>
                <a href="#" className="link-txt">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#" className="link-txt">
                  Contactame
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
