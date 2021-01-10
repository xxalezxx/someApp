import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar__main">
      <div className="navbar__logo">Logo</div>
      <div className="navbar__menu">
        <NavLink className="navbar__menu-botton" exact to="/home">
          Inicio
        </NavLink>
        <NavLink className="navbar__menu-botton" exact to="/home">
          Mesas
        </NavLink>
        <NavLink className="navbar__menu-botton" exact to="/home">
          Contacto
        </NavLink>
      </div>
    </nav>
  )
}
