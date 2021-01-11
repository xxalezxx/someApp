import { useState } from "react"

export const useJson = (initialState = {}) => {
  const [entry, setEntry] = useState(() => {
    return JSON.parse(initialState)
  })

  return [entry]
}
