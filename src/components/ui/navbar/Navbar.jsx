import { useContext } from "react"
import { NavLink, useHistory, userHistory } from "react-router-dom"

import { AuthContext } from "../../../auth/AuthContext"
import { types } from "../../../types/types"

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext)

  const history = useHistory()

  const handleLogout = () => {
    history.replace("/login")
    dispatch({
      type: types.logout,
    })
  }

  return (
    <div className="navbar__container">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <NavLink className="navbar__menu-item-redirect" exact to="/home">
            Inicio
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink className="navbar__menu-item-redirect" exact to="/home">
            Mesas
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink className="navbar__menu-item-redirect" exact to="/home">
            Contacto
          </NavLink>
        </li>
      </ul>
      <ul className="navbar__btn__userSettings">
        <button
          onClick={handleLogout}
          className="navbar__btn__userSettings-logout"
        >
          Salir
        </button>
      </ul>
    </div>
  )
}
