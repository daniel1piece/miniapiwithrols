import pool from '../config/database.js';

export const getTasks = async () => {
    const [rows] = await pool.query(`
        SELECT * FROM tasks;
    `);
    return rows;
}

export const getTask = async ( id ) => {
    const [rows] = await pool.query(`
        SELECT * FROM tasks
        WHERE id_task = "${id}";
    `);
    return rows[0];
}

export const createTask = async ( taskInfo ) => {

    const {title, id_user, assigned_to} = taskInfo;

    const result = await pool.query(`
        INSERT INTO tasks(title, id_user, assigned_to)
        VALUES("${title}", "${id_user}", "${assigned_to}");
    `);
    return result;
}

export const updateTask = async (id, taskInfo ) => {
    console.log(taskInfo, "II");
    const {field, value} = taskInfo;
    
    
    const result = await pool.query(`
        UPDATE tasks
        SET ${field} = "${value}"
        WHERE id_task = "${id}";
    `);
    return result;
}