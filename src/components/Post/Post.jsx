import './PostCss.css'

const Post =(props)=>{

    return (
        <>
        <article id="carta">
            <div className="styleDivPost1"><h2>Propietario del vehículo: </h2><p className='Dueño'>{props.Propietario}</p></div>
            
            <div className="styleDivPost2">
            <h3>Marca: </h3><p>{props.Marca}</p>
            <h3>Modelo: </h3><p>{props.Modelo}</p>
            </div>

            <div className="styleDivPost2">
            <h4>Número de placa: </h4><p>{props.NumPlaca}</p>
            <h4>Número de serie: </h4><p>{props.NumSerie}</p>
            </div>
            <div className="styleDivPost2">
            <h4>Número de motor: </h4><p>{props.NumMotor}</p>
            <h4>Color: </h4>{props.Color}
            </div>
            
            <h4>Observaciones:</h4> <p>{props.Observacion}</p>
            <h4>Fecha:</h4><p>{props.Fecha}</p>

        </article>
        </>
    )
}

export default Post