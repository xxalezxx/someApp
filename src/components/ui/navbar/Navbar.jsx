import { useContext } from "react"
import { useHistory } from "react-router-dom"

import { AuthContext } from "../../../auth/AuthContext"
import { types } from "../../../types/types"
import { MenuItems } from "./MenuItems"
import NavbarHamburger from "./NavbarHamburgerMenu"

export const Navbar = () => {
  const { dispatch } = useContext(AuthContext)

  const history = useHistory()

  const handleLogout = () => {
    history.replace("/login")
    dispatch({
      type: types.logout,
    })
  }

  return (
    <div className="navbar__container">
      {window.screen.width < 600 ? (
        <NavbarHamburger />
      ) : (
        <MenuItems
          classNameMenu="navbar__menu-item-redirect"
          classNameList="navbar__menu-item"
          classNameMainList="navbar__menu"
        />
      )}
    </div>
  )
}
