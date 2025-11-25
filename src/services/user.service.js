import pool from "../config/database.js";

export const getUser = async ( id ) => {
    const [rows] = await pool.query(`
        SELECT * FROM users
        WHERE id = "${id}";
    `);

    return rows[0];
}

export const getUserByEmail = async (email) => {
  const [rows] = await pool.query(`SELECT email from users WHERE email = ?`, [email]);
  return rows[0] || null;
}