import React from "react"
import * as AiIcons from "react-icons/ai"
import { Airtable, SiAirtable } from "react-icons/si"

export const menuNavBar = (classNameMenuItems) => [
  {
    title: "Inicio",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: classNameMenuItems,
  },
  {
    title: "Mesas",
    path: "/tables",
    icon: <AiIcons.AiFillHome />,
    cName: classNameMenuItems,
  },
]
