import React from "react"

export const TablesScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="tables__container">
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
        <button type="submit" className="tables__form__button-submit">
          Buscar...
        </button>
      </form>
    </div>
  )
}
