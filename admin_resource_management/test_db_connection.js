const mysql = require('mysql');

// 创建数据库连接配置
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'admin_resource_management'
});

// 连接到数据库
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database with threadId:', db.threadId);
});

// 关闭数据库连接
db.end((err) => {
    if (err) {
        console.error('Error closing the database connection:', err.stack);
        return;
    }
    console.log('Database connection closed.');
});