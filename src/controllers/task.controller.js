import * as Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    try {
       const tasks = await Task.getTasks();
       res.status(200).json({
        message:'Tareas obtenidas exitosamente',
        data:tasks
       })
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar obtener las tareas",
            error:error
        });
    }
} 
    
export const getTask = async (req, res) => {
    try {
       const task = await Task.getTask(req.params.id);

       if (!task) return res.status(200).json({message:"La tarea no esta registrada en el sistema", data:task});

       res.status(200).json({
        message:'Tarea obtenida exitosamente',
        data:tasks
       })
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar obtener la tarea",
            error:error
        });
    }
} 
    
export const createTask = async (req, res) => {
    try {
       const task = await Task.createTask(req.body);

       res.status(201).json({
        message:'Tarea creada exitosamente',
        data:task
       })
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar crear la tarea",
            error:error
        });
    }
} 
    

export const modifyTask = async (req, res) => {
    try {
        console.log(req.params.id, req.body);
        
       const task = await Task.updateTask(req.params.id, req.body);

       res.status(201).json({
        message:'Tarea actualizada exitosamente',
        data:task
       })
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar actualizar la tarea",
            error:error
        });
    }
} 
    