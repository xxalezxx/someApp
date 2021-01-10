import React, { useContext } from "react"

import { AuthContext } from "../../auth/AuthContext"
import { types } from "../../types/types"
import { useForm } from "../../hooks/useForm"

export const LoginScreen = ({ history }) => {
  const [, errors, handleInputChange, , verification] = useForm()
  const { dispatch } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (verification(e)) {
      const lastPath = localStorage.getItem("lasPath") || "/"
      dispatch({
        type: types.login,
        payload: {
          name: "SomeBody",
        },
      })
      history.replace(lastPath)
    }
  }

  return (
    <div className="login__main">
      <div className="login__box-content">
        <div className="login__box-img">
          <img src="assets/icons/icon-login.svg" alt="Logo Vote" />
        </div>
        <h2>Elecciones 2021</h2>
        <h3>Sistema de conteo</h3>
        <form className="login__box-form" onSubmit={handleSubmit}>
          <input
            id="userLogin"
            type="text"
            placeholder="Usuario"
            className="login__box-form__userName"
            autoComplete="off"
            name="userLogin"
            autoFocus="on"
            maxLength="50"
            onChange={handleInputChange}
          />
          <div className="login__box-form__wrong-input">
            <span
              className={`errorInput ${
                errors.userLogin === "noData" ? "visible animation" : "hidden"
              }`}
            >
              Ingrese usuario
            </span>
          </div>

          <input
            id="userPassword"
            className="login__box-form__userPassword"
            placeholder="Contraseña"
            name="userPassword"
            maxLength="50"
            type="password"
            onChange={handleInputChange}
          />
          <div className="login__box-form__wrong-input">
            <span
              className={`errorInput ${
                errors.userPassword === "noData"
                  ? "visible animation"
                  : "hidden"
              }`}
            >
              Ingrese contraseña
            </span>
          </div>

          <button className="login__box-form__submit" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}
