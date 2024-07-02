"use client";
import { useContext } from "react";
import { Stade } from "./Global";
const UseGlobal = () => {
    const contexto = useContext(Stade);
  return contexto;
}

export default UseGlobal;