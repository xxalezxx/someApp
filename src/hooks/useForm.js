import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState)
  const [errors, setErrors] = useState({
    userLogin: "data",
    userPassword: "data",
  })

  const reset = () => {
    setvalues(initialState)
  }

  const handleInputChange = ({ target }) => {
    const val = target.name
    if (values.val?.class.length > 0) {
      setvalues({
        ...values,
        [target.name]: {
          [target.name]: target.value,
        },
      })
    } else {
      setvalues({
        ...values,
        [target.name]: {
          value: target.value,
          classNameOriginal: target.className,
        },
      })
    }
  }

  const verification = ({ target }) => {
    const user = target[0]
    const pass = target[1]
    let userStatus = ""
    let passStatus = ""

    if (user.value?.length < 1) {
      userStatus = "noData"
    } else {
      userStatus = "data"
    }

    if (pass.value?.length < 1) {
      passStatus = "noData"
    } else {
      passStatus = "data"
    }

    setErrors({
      ...errors,
      [user.id]: userStatus,
      [pass.id]: passStatus,
    })

    return userStatus === "data" && passStatus === "data"
  }

  return [values, errors, handleInputChange, reset, verification]
}
