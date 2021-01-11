import React from "react"

export const TablesForm = (props) => {
  const table = props.location.state.detail

  return (
    <>
      <div className="tablesForm__loading-data hidden">
        <img
          src="assets\icons\loading.svg"
          alt="Loading"
          className="tablesForm__loading-data__img"
        />
      </div>

      <div className="tablesForm__main">
        <aside className="tablesForm__aside">
          <div className="tablesForm__aside__principalCard">
            <div>MESA</div>
            <div>{table}</div>
          </div>
          <div className="tablesForm__aside__principalCard">
            <div>ESCUELA</div>
            <div>Sagrado Corazon</div>
            <div>E001</div>
          </div>
          <div className="tablesForm__aside__principalCard">
            <div>Circuito</div>
            <div>Avellaneda Centro</div>
            <div>C045</div>
          </div>
        </aside>
        <div className="tablesForm__content">contenidio</div>
      </div>
    </>
  )
}
