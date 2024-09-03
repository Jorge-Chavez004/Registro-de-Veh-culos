

const PostDetalle =({NumPlaca, NumSerie, NumMotor, Color, Marca, Modelo, Propietario, Fecha, Observacion}) => {
    return (
        <>
            <h2>{Propietario}</h2>
            <h3>{Marca}</h3>
            <h3>{Modelo}</h3>
            <h4>{NumPlaca}</h4>
            <h4>{NumSerie}</h4>
            <h4>{NumMotor}</h4>
            <h4>{Color}</h4>
            <p>
                {Observacion}
            </p>
            <p>
                {Fecha}
            </p>
        </>
    )
}

export default PostDetalle