import React from "react"
import { CategoryCard } from "./CategoryCard"

export const CategoriesList = ({ list }) => {
  return (
    <div className="categoriesList__main">
      {list.map((item) => (
        <CategoryCard key={item.codigo} {...item} />
      ))}
    </div>
  )
}
