import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const TablesScreen = () => {
  const [errors, setErrors] = useState({})
  const history = useHistory()

  const errorsInformation = (e) => {
    e.target[0].value.length < 1
      ? setErrors({
          input: "noData",
        })
      : setErrors({})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    errorsInformation(e)
    Object.entries(errors).length !== 0 && history.push("/tableForm")
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
          type="number"
          autoComplete="off"
          placeholder="Numero mesa"
          className="tables__form__input"
          name="tableNumber"
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
