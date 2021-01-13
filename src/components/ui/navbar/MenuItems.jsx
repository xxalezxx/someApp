import { NavLink } from "react-router-dom"
import { menuNavBar } from "../../menu/menuNavBar"

export const MenuItems = ({
  classNameMenu,
  classNameList,
  classNameMainList,
}) => {
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
    </ul>
  )
}
