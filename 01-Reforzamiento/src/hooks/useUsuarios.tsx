import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"

export const useUsuarios = () => {
    
    const [usuario, setUsuario] = useState<Usuario[]>([])
    const paginaRef = useRef(1)

 
    useEffect(() => {
        //Llamada a la API
       cargarUsuarios()
    },[])

    const cargarUsuarios  = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users',
            {
                params:{
                    page: paginaRef.current
                }
            });

        if (resp.data.data.length > 0){
            setUsuario(resp.data.data);
            paginaRef.current ++;
        }else{
            alert('No hay más registros')
        }
    }

    return {
        usuario,
        cargarUsuarios
    }
}

