import pool from "../config/database.js";


export const getUser = async ( id ) => {
    const [rows] = await pool.query(`
        SELECT * FROM users
        WHERE id = "${id}";
    `);

    return rows[0];
}

export const assigned_exists = async ( id ) => {
    const [rows] = await pool.query(`
        SELECT * FROM users
        WHERE id = "${id}";
    `);

    return rows[0];
}