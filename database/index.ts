// 导入mysql模块
import mysql from 'mysql2'

// // 创建数据库连接对象
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'lyk0601..',
//   database: 'db1',
//   port: 3306,
// })

// connection.connect((err) => {
//   if (err) throw err
//   console.log('Connected to MySQL database!')
// })
// // 向外共享db数据库连接对象
// export default connection
const pool = mysql.createPool({
  host: process.env.ENV_HOST,
  user: process.env.ENV_USER,
  password: process.env.ENV_PASSWORD,
  database: process.env.ENV_DATABASE,
  port: Number(process.env.ENV_PORT),
});

export default pool.promise();
