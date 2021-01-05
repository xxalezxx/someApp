import React from "react"

export const LoginScreen = () => {
  return (
    <div className="login__main">
      <div className="login__box-content">
        <div className="login__box-img">
          <img src="assets/icons/icon-login.svg" alt="Logo Vote" />
        </div>
        <h2>Elecciones 2021</h2>
        <h3>Sistema de conteo</h3>
        <form className="login__box-form">
          <input
            type="text"
            placeholder="Usuario"
            className="login__box-form__userName"
            autoComplete="off"
            name="userLogin"
            autoFocus="on"
            maxLength="50"
            minLength="2"
          />
          <input
            className="login__box-form__userPassword"
            placeholder="Contraseña"
            name="userPassword"
            maxLength="50"
            minLength="2"
            type="password"
          />
          <button className="login__box-form__submit" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}
