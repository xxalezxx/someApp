import React from "react"

export const CategoriesList = ({ list }) => {
  return (
    <div className="categoriesList__main">
      <div className="categoriesList__main-title">
        Categorias actuales disponibles
      </div>
      <ul className="categoriesList__main-content">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              className="categoriesList__main-content__card border-black"
            >
              <span>{item.categoria}</span>
              <div className="categoriesList__main-content__buttons">
                <button className="btn-red">Cargar</button>
                <button className="btn-blue">Resetear</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
