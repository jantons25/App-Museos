import '../styles/banner.css'

function Banner(props){
  const {ciudad, museo, descripcion, img} = props;
  return(
    <div className='banner'>
      <img className='banner-img' src={`${img}`} />
      <div className="banner-container">
        <hr className='banner__hr'/>
        <p className='banner-lugar'>{ciudad}</p>
        <h1>{museo}</h1>  
        <p>{descripcion}</p>
        <div className="banner-container__boton">
          <button>Conocer</button>
        </div>
      </div>
    </div>
  )
}

export default Banner