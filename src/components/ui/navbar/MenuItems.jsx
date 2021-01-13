import { NavLink } from "react-router-dom"

export const MenuItems = ({
  classNameMenu,
  classNameList,
  classNameMainList,
}) => {
  return (
    <ul className={classNameMainList}>
      <li className={classNameList}>
        <NavLink className={classNameMenu} exact to="/home">
          Inicio
        </NavLink>
      </li>
      <li className={classNameList}>
        <NavLink className={classNameMenu} exact to="/tables">
          Mesas
        </NavLink>
      </li>
      <li className={classNameList}>
        <NavLink className={classNameMenu} exact to="/home">
          Contacto
        </NavLink>
      </li>
    </ul>
  )
}
