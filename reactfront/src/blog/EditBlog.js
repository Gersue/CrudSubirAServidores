import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blog/'

const EditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //Procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content: content
        })
        navigate('/')
    }

    useEffect(()=>{
        getBlogId()
    }, [])

    const getBlogId = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

  return (
    <div>
    <h3>Edit Blog</h3>
    <form onSubmit={update}>
      <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          className='form-control'
          />
      </div>
      <div className='mb-3'>
      <label className='form-label'>Content</label>
          <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type='text'
          className='form-control'
          />
      </div>
      <button type='submit' className='btn btn-primary'>Store</button>
    </form>
  </div>
  )
}

export default EditBlog
