import { Usuario } from "../interfaces/reqRes"
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const {usuario,cargarUsuarios} = useUsuarios()

    const renderItem = ({id, first_name,avatar,email}:Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img 
                        style={{
                            width:50,
                            borderRadius:100
                        }} 
                        src={avatar}
                        alt={first_name} />
                </td>
                <td>{first_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

  return (
    <>
        <h3>Usuarios:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuario.map(renderItem)
                }
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={cargarUsuarios}>Anteriores</button>
        &nbsp;
        <button className='btn btn-primary' onClick={cargarUsuarios}>Siguiente</button>
    </>
  )
}
