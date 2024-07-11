import { TbWorld } from "react-icons/tb";
import '../styles/menu.css'

export const Menu = ({ seleccionar }) => {
  return(
    <div className="menu">
      <div className="menu__text">
        <h2><TbWorld className="menu__icon"/>App de Museos</h2>
      </div>
      <div className="menu__container">
        <ul>
          <li className={seleccionar==='Inicio' && 'menu__seleccionar'}>Inicio</li>
          <li className={seleccionar==='Buscar' && 'menu__seleccionar'}>Buscar</li>
          <li className={seleccionar==='Información' && 'menu__seleccionar'}>Información</li>
          <li className={seleccionar==='Contacto' && 'menu__seleccionar'}>Contacto</li>
        </ul>
      </div>
    </div>
  )
}
