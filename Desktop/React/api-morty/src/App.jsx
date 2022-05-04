import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';

const App = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState("")

  useEffect(() => {
    localStorage.setItem("nombreApi",JSON.stringify(nombrePersonaje))
    if(localStorage.getItem("nombreApi")){
      setNombrePersonaje(JSON.parse(localStorage.getItem("nombreApi")))
    }
  }, [nombrePersonaje])

  return (
    <div className='container'>
      <h1>App Rick y Morty</h1>
      <Formulario setNombrePersonaje={setNombrePersonaje} />
      <PintarDatos nombrePersonaje={nombrePersonaje} />
    </div>
  )
}

export default App