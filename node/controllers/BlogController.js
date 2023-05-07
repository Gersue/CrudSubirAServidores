//importar modelo
import BlogModel from "../models/BlogModel.js";

/* Metodos del CRUD */

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blog = await BlogModel.findAll()
        res.json(blog);
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{
                id:req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Crear un registro
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro Actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un Registro

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy ({
            where: { id: req.params.id}
        })
        res.json({
            "message": "Registro Eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}