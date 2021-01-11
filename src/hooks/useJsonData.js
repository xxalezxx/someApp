import { useState } from "react"

export const useJsonData = (initialValue = {}) => {
  const data = initialValue

  const getTable = data.nro_mesa
  const getCodeSchool = data.escuela.codigo
  const getNameSchool = data.escuela.escuela
  const getCircuitName = data.circuito.circuito
  const getCircuitCode = data.circuito.codigo
  const getCategories = data.categorias

  return [
    getTable,
    getCodeSchool,
    getNameSchool,
    getCircuitName,
    getCircuitCode,
    getCategories,
  ]
}
