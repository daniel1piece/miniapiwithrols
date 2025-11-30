import pool from "../config/database.js";


export const userExists = async ( id ) => {
    const [rows] = await pool.query(`
        SELECT * FROM users
        WHERE id = "${id}";
    `);
    console.log(rows, "task service js");
    
    return rows[0];
}

export const userIsAdmin = async ( id ) => {
        
    const [rows] = await pool.query (
        `SELECT * FROM users
         WHERE id = "${id}";`
    );
    console.log("W, task service");
    console.log(rows);
    
    if (rows.length == 0) return null;
    
    return rows[0].rol;
}