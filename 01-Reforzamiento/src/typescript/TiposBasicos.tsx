export const TiposBasicos = () => {

    const nombre: string = "Fernando";
    const edad: number = 23;
    const estadoActivo: boolean = false;

    const poderes: string[] = [];


  return (
    <>
    <h3>Tipos básicos</h3>
    {nombre},{edad},{(estadoActivo) ? 'activo' : 'no activo'}
    <br />
    {poderes.join(', ')}
    </>
  )
}
