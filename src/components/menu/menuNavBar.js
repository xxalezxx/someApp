import React from "react"
import * as AiIcons from "react-icons/ai"
import { GiVote } from "react-icons/gi"

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
    icon: <GiVote />,
    cName: classNameMenuItems,
  },
]
