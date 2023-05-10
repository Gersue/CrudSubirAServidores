import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/blog/'

const ShowBlogs = () => {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    getBlogs()
  }, []);

  //Procedimiento para mostrar todo los blog
  const getBlogs = async () => {
    const res = await axios.get(URI)
    setBlog(res.data);
  };

  //procedimiento para Eliminar
  const deleteBlog = async (id) => {
    axios.delete(`${URI}${id}`);
    getBlogs();
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col">
          <Link to={'/create'} className="btn btn-primary"><i className="fa-solid fa-plus"></i></Link>
          <table className="table mt-2">
            <thead className="table-primary">
              <tr>
                <th>title</th>
                <th>content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { blog.map ((datos) => (
                <tr key={datos.id}>
                  <td>{datos.title}</td>
                  <td>{datos.content}</td>
                  <td>
                    <Link to={`/edit/${datos.id}`} className="btn btn-info">
                    <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => deleteBlog(datos.id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogs;
