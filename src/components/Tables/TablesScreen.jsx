import React from "react"
import { useJson } from "../../hooks/useJson"

export const TablesScreen = () => {
  const [entry] = useJson(`{
    "nro_mesa": 559,
    "escuela": {
      "codigo": "E001",
      "escuela": "Sagrado Corazaon"
    },
    "circuito": {
      "codigo": "C23",
      "circuito": "Avellaneda Centro"
    },
    "cantidad_votos": 0,
    "categorias": [
      {
        "codigo": "c1",
        "categoria": "presidente",
        "listas": [
        {"codigo": "L1",
        "lista": "Lista 1",
        "partido": "Partido 1",
        "orden": 2,
        "votos": 0
      },
      {"codigo": "L2",
        "lista": "Lista 2",
        "partido": "Partido 1",
        "orden": 1,
        "votos": 0
      },
      {"codigo": "L506",
        "lista": "Lista 506", 
        "partido": "Partido 2",
        "orden": 3,
        "votos": 0
        
      }]},
      
      {
        "codigo": "c2",
        "categoria": "gobernador",
        "listas": [
        {"codigo": "L1",
        "lista": "Lista 1",
        "partido": "Partido 1",
        "orden": 2,
        "votos": 0
      },
      {"codigo": "L2",
        "lista": "Lista 2",
        "partido": "Partido 1",
        "orden": 1,
        "votos": 0
      },
      {"codigo": "L506",
        "lista": "Lista 2",
        "partido": "Partido 2",
        "orden": 3,
        "votos": 0
        
      }]},
      {
        "codigo": "c3",
        "categoria": "intendente",
        "listas": [
        {"codigo": "L1",
        "lista": "Lista 1",
        "partido": "Partido 1",
        "orden": 2,
        "votos": 0
      },
      {"codigo": "L506",
        "lista": "Lista ",
        "partido": "Partido 2",
        "orden": 3,
        "votos": 0
        
      }]}
      ]
      
      }
  `)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(entry.escuela)
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
