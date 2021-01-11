import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const TablesScreen = () => {
  const [errors, setErrors] = useState({ input: "start" })
  const history = useHistory()

  const handleOnchange = ({ target }) => {
    setErrors({
      input: target.value?.length > 0 && target.value >= 0 ? "data" : "noData",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Object.entries(errors)[0][1] === "data"
      ? history.push({
          pathname: "/tableForm",
          state: { detail: e.target[0].value },
        })
      : setErrors({
          input: "noData",
        })
  }

  return (
    <div
      className={`tables__container ${
        errors.input === "noData" && "wrong-border"
      }`}
    >
      <h2>Buscador de mesa de votacion</h2>
      <h3>Por favor, introduzca su numero de mesa</h3>
      <form onSubmit={handleSubmit} className="tables__form">
        <input
          autoFocus="on"
          type="number"
          autoComplete="off"
          placeholder="Numero mesa"
          className="tables__form__input"
          name="tableNumber"
          onChange={handleOnchange}
          min="0"
          step="1"
        />
        <div className="login__box-form__wrong-input">
          <span
            className={`errorInput ${
              errors.input === "noData" ? "visible animation" : "hidden"
            }`}
          >
            Ingrese mesa
          </span>
        </div>
        <button type="submit" className="tables__form__button-submit">
          Buscar...
        </button>
      </form>
    </div>
  )
}
