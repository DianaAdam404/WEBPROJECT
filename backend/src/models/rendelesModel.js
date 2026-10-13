import pool from '../config/db.js';

const rendelesModel = {
    async getAll() {
        const [rows] = await pool.query('SELECT * FROM rendelesek');
        return rows;
    }
};

export default rendelesModel;