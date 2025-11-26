import pool from "../config/database.js";
import bcrypt from 'bcrypt';

export const userExists = async ( id ) => {
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

export const verifyPasswrd = async (email, passwrd) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  console.log("rows", rows);
  if(rows[0]){
    const isMatch = await bcrypt.compare(passwrd, rows[0].passwrd);
    console.log(isMatch, "isM");
    
    if(isMatch){
      return {
        id: rows[0].id,
        email: rows[0].email,
        name: rows[0].nombre
      };
    }
    return null;
  }
  return null;

}