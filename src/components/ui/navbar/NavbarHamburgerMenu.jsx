import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { CgLogOut } from "react-icons/cg"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { menuNavBar } from "../../menu/menuNavBar"
import { useHistory } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../auth/AuthContext"
import { types } from "../../../types/types"

function NavbarHamburger() {
  const { dispatch } = useContext(AuthContext)

  const history = useHistory()

  const handleLogout = () => {
    history.replace("/login")
    dispatch({
      type: types.logout,
    })
  }

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar__hamburger__nav">
          <button
            to="#"
            onClick={showSidebar}
            className="navbar__hamburger__menu-bars"
          >
            <FaIcons.FaBars />
          </button>
        </div>
        <div>{sidebar}</div>
        <nav
          className={
            sidebar
              ? "navbar__hamburger__menu navbar__hamburger__menu__active"
              : "navbar__hamburger__menu"
          }
        >
          <ul className="navbar__hamburger__menu-items" onClick={showSidebar}>
            <li className="navbar__hamburger__toggle">
              <Link to="#" className="navbar__hamburger__menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
              <span>MENU</span>
            </li>
            {menuNavBar("navbar__hamburger__item-menu").map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}

            <li className="navbar__hamburger__item-menu">
              <a className="navbar__hamburger__logout">
                <CgLogOut />
                <span>Salir</span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default NavbarHamburger
