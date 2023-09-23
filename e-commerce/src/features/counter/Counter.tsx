import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {

  increment,
  incrementAsync,
  selectCount,
} from "./counterSlice"

export default function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()


  return (
    <div>

    </div>
  )
}
