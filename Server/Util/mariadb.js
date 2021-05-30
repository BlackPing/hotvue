const log = require('./log');
const DB_CONF = require('../Config/config').mariadb_info;
const mariadb = require('mariadb');
const pool = mariadb.createPool(DB_CONF);
 
async function asyncFunction(type, query, array) {
    let conn;
    let result = {};

    try {
        result.state = true;

        conn = await pool.getConnection();

        const rows = await conn.query(query, array);
        if(type) { 
            result.rows = rows;
        }
    } catch (err) {
        result.state = false;
        log.info('error', req.ip, req.path, err);
        throw err;
    } finally {
        if (conn) conn.release();
        return result;
    }
}

module.exports = asyncFunction;