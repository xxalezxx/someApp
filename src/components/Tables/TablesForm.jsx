import React from "react"
import { useJson } from "../../hooks/useJson"
import { useJsonData } from "../../hooks/useJsonData"
import { json } from "../../Json/mesa559"
import { CategoriesList } from "../Categories/CategoriesList"

export const TablesForm = (props) => {
  const table = props.location.state.detail
  const [entry] = useJson(json)
  const [
    getTable,
    getCodeSchool,
    getNameSchool,
    getCircuitName,
    getCircuitCode,
    getCategories,
  ] = useJsonData(entry)
  const existingData = (data) => (data.toString().length > 0 ? data : "---")

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
            <div>{existingData(getTable)}</div>
          </div>
          <div className="tablesForm__aside__principalCard">
            <div>ESCUELA</div>
            <div>{existingData(getNameSchool)}</div>
            <div>{existingData(getCodeSchool)}</div>
          </div>
          <div className="tablesForm__aside__principalCard">
            <div>Circuito</div>
            <div>{existingData(getCircuitName)}</div>
            <div>{existingData(getCircuitCode)}</div>
          </div>
        </aside>
        <div className="tablesForm__content">
          <CategoriesList list={getCategories} />
        </div>
      </div>
    </>
  )
}
