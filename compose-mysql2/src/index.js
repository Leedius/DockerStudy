const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.error('❌ MySQL 연결 실패:', err);
        return;
    }
    console.log('✅ MySQL 연결 성공!');

    connection.query('SELECT NOW()', (err, results) => {
        if (err) throw err;
        console.log('📅 현재 시간:', results[0]['NOW()']);
        connection.end();
    });
});
