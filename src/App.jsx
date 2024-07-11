import { useState, useEffect } from 'react'
import './App.css'
import Banner from './components/Banner'
import Banners from './components/Banners'
import { Menu } from './components/Menu'

function App() {
  
  const [vista, setVista] = useState(['Lambayeque','Museo Nacional Bruning','Sumérgete en el legado cultural de Lambayeque en el Museo Nacional Bruning, que alberga una impresionante variedad de piezas arqueológicas y arte local.','../src/images/muse-bruning.jpeg'])

  const actualizarVista = bann => {
    setVista(bann);
  }
  useEffect(() => {
  }, [vista]);

  return (
    <div className='App'>
      {vista.length>0 && (
        <Banner 
        ciudad = {vista[0]}
        museo = {vista[1]}
        descripcion = {vista[2]}
        img = {vista[3]}
        />

      )}
      <Menu seleccionar='Inicio'/>
      <Banners 
        img='../src/images/muse-bruning.jpeg'
        left='44%'
        museo = 'Museo Nacional Bruning'
        ciudad = 'Lambayeque'
        descripcion = 'Sumérgete en el legado cultural de Lambayeque en el Museo Nacional Bruning, que alberga una impresionante variedad de piezas arqueológicas y arte local.'
        actualizarVista = {actualizarVista}
        />
      <Banners 
        img='../src/images/museo-tucume.jpg'
        left='62%'
        museo = 'Museo de Túcume'
        ciudad = 'Túcume'
        descripcion = 'Descubre la rica historia de Túcume a través de una colección fascinante de artefactos y exhibiciones que narran la antigua cultura Lambayeque.'
        actualizarVista = {actualizarVista}
      />
      <Banners 
        img='../src/images/museo-huaca-rajada.jpg'
        left='80%'
        museo = 'Museo Huaca Rajada'
        ciudad = 'Lambayeque'
        descripcion = 'Visita el sitio arqueológico de Huaca Rajada y maravíllate con las excavaciones donde se descubrió la tumba del Señor de Sipán, un hito en la historia precolombina de Perú'
        actualizarVista = {actualizarVista}
      />
    </div>
  )
}

export default App
