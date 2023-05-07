import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blog/'

const ShowBlogs = () => {
    const[blog, setBlog] = useState([])
    useEffect(() => {

    }, [])

    //Procedimiento para mostrar todo los blog
    const getBlog = async () => {
        const res = await axios.get(URI)
    }

    //procedimiento para Eliminar
    const deleteBlog = async () => {

    }

  return (
    <div>

    </div>
  )
}

export default ShowBlogs