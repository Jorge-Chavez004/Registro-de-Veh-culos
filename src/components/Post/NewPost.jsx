import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const NewPost =() =>{

    const Principal={
        paddingLeft: '20px'
    }

    const StyleSub={
        fontSize: '20px'    
    }
    const a={
        paddingRight:'20px'
    }

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({NumPlaca: '', NumSerie:'', NumMotor:'', Color:'', Marca:'', Modelo:'', Propietario:'', Observacion:'', Fecha: new Date()})
    const navigate = useNavigate()

    useEffect(() =>{
        const rawPosts = JSON.parse(localStorage.getItem('posts'))
        setPosts(rawPosts)
        console.log(rawPosts);
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        alert('El registro se ha completado con éxito');
        navigate('/');
    }
    
    const botonDestroyer =() =>{
        localStorage.clear();
        alert('Se ha eliminado todos los registros de autos');
        navigate('/');
    }
    
    return (
        <div style={Principal}>
        <h1>Registro para mantenimiento</h1>
        <a href="/" style={a}>Regresar a la página principal</a>
        <button onClick={botonDestroyer}>Eliminar todo Registro</button>
        <p style={StyleSub}>Por favor, ingresar los datos del vehículo para guardarlo y cargarlo en la página principal</p>
        <form>
            <label htmlFor="NumPlaca">Número de Placa: </label>
            <input type="text" name="NumPlaca" id="NumPlaca"
            value={post.NumPlaca} onChange={e => setPost({...post, NumPlaca: e.target.value})}/>
            <br/>
            <label htmlFor="NumSerie">Número de Serie: </label>
            <input type="text" name="NumSerie" id="NumSerie"
            value={post.NumSerie} onChange={e => setPost({...post, NumSerie: e.target.value})}/>
            <br/>
            <label htmlFor="NumMotor">Número de Motor: </label>
            <input type="text" name="NumMotor" id="NumMotor"
            value={post.NumMotor} onChange={e => setPost({...post, NumMotor: e.target.value})}/>
            <br/>
            <label htmlFor="Color">Color: </label>
            <input type="text" name="Color" id="Color"
            value={post.Color} onChange={e => setPost({...post, Color: e.target.value})}/>
            <br/>
            <label htmlFor="Marca">Marca: </label>
            <input type="text" name="Marca" id="Marca"
            value={post.Marca} onChange={e => setPost({...post, Marca: e.target.value})}/>
            <br/>
            <label htmlFor="Modelo">Modelo: </label>
            <input type="text" name="Modelo" id="Modelo"
            value={post.Modelo} onChange={e => setPost({...post, Modelo: e.target.value})}/>
            <br/>
            <label htmlFor="Propietario">Propietario: </label>
            <input type="text" name="Propietario" id="Propietario"
            value={post.Propietario} onChange={e => setPost({...post, Propietario: e.target.value})}/>
            <br/>
            <label htmlFor="Observacion">Observación: </label>
            <textarea type="text" name="Observacion" id="Observacion" cols='38' rows='10'
                value={post.Observacion} onChange={e => setPost({...post, Observacion: e.target.value})}/>
            <br/>
            <br/>
            <button type='submit' onClick={handleSubmit}>Pulicar</button>
        </form>
        </div>
    )
}

export default NewPost