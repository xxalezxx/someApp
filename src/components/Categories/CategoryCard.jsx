import React from "react"

export const CategoryCard = ({ id, categoria, codigo, listas }) => {
  return (
    <div className="categoryCard__card">
      {categoria}
      {codigo}
    </div>
  )
}
