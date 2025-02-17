// // filepath: /Users/vikasbhandari/Documents/GitHub/CypressDecember2024/db.js
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'your-database-host',
//   user: 'your-database-user',
//   password: 'your-database-password',
//   database: 'your-database-name'
// });

// connection.connect();

// module.exports = {
//   query: (query, params) => {
//     return new Promise((resolve, reject) => {
//       connection.query(query, params, (error, results) => {
//         if (error) {
//           return reject(error);
//         }
//         resolve(results);
//       });
//     });
//   }
// };