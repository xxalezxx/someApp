import { NavLink, useHistory } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../auth/AuthContext"
import { menuNavBar } from "../../menu/menuNavBar"
import { types } from "../../../types/types"

export const MenuItems = ({
  classNameMenu,
  classNameList,
  classNameMainList,
}) => {
  const { dispatch } = useContext(AuthContext)

  const history = useHistory()

  const handleLogout = () => {
    history.replace("/login")
    dispatch({
      type: types.logout,
    })
  }

  return (
    <ul className={classNameMainList}>
      {menuNavBar().map((item, index) => (
        <li key={index} className={classNameList}>
          <NavLink className={classNameMenu} exact to={item.path}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        </li>
      ))}
      <div>
        <button
          onClick={handleLogout}
          className="navbar__btn__userSettings-logout"
        >
          Salir
        </button>
      </div>
    </ul>
  )
}
