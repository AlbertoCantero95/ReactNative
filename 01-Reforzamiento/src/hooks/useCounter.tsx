import { useState } from "react";

export const useCounter = (numInicial: number = 10) => {
    const [valor, setValor] = useState(numInicial)


    const acumular = (numero: number) => {

        setValor(valor + numero);
    }

    return {
        valor,
        acumular
    }
}
