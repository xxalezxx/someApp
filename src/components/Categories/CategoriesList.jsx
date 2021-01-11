import React from "react"
import { CategoryCard } from "./CategoryCard"

export const CategoriesList = ({ list }) => {
  return (
    <div className="categoriesList__main">
      <div className="categoriesList__main-title">
        Categorias actuales disponibles
      </div>
      <div className="categoriesList__main-content">
        {list.map((item) => (
          <CategoryCard key={item.codigo} {...item} />
        ))}
      </div>
    </div>
  )
}
