import { useState } from "react"

export const useJson = (initialState = {}) => {
  const [entry, setEntry] = useState(() => {
    return JSON.parse(initialState)
  })

  const haveSomeInformation = () => {
    return entry.length
  }

  return [entry, haveSomeInformation]
}
