import pool from "../config/database.js";

export const getUsers = async () => {
    const [rows] = await pool.query(`
        SELECT * FROM users;
    `);

    return rows;
}

export const getUser = async ( id ) => {
    const [rows] = await pool.query(`
        SELECT * FROM users
        WHERE id = "${id}";
    `);

    return rows[0];
}

export const createUser = async ( userInfo ) => {

    const {name, email, passwrd, rol} = userInfo;

    const result = await pool.query(`
        INSERT INTO users(name, email, passwrd, rol)
        VALUES ("${name}", "${email}", "${passwrd}", "${rol}");
    `);

    return result;
}

export const updateUser = async ( id, userInfo ) => {

    const {field, value} = userInfo;

    const result = await pool.query(`
        UPDATE users
        SET ${field}="${value}"
        WHERE id = "${id}";
    `);

    return result;
}

export const deleUser = async ( id ) => {
    
    const result = await pool.query(`
        DELETE FROM users
        WHERE id = "${id}";
    `);

    return result;
}

