import db from '../database/db.js';

export const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users.js')
    return rows;
};