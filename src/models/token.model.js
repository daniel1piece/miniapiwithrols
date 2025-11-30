import pool from '../config/database.js';

export const saveToken = async (userId, token) => {
    const [result] = await pool.query('INSERT INTO active_tokens (user_id, token) VALUES (?,?);', [userId, token]);
    console.log("result", result);
    return result;
};

export const isTokenActive = async (token) => {
    // console.log("hey2");
    const [rows] = await pool.query('SELECT * FROM active_tokens WHERE token = ?;', [token]);
    // console.log(rows, "rows token model");
    return rows[0] || null;
};

// console.log(isTokenActive("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0dGVzdEB0ZXN0Lm9yZyIsImlhdCI6MTc2NDQ4MDk3MywiZXhwIjoxNzY0NDk1MzczfQ.9kJR_LyT_pm_BMUa1qqiN8K_UrZt_z2DucxgiyASaCM"));


export const deleteToken = async (token) => {
    const [result] = await pool.query('DELETE FROM active_tokens WHERE token = ?;', [token]);
    return result || null;
}