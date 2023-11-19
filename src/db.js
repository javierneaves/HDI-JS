import { createPool }  from 'mysql2/promise'

 const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'Jn11965720!',
  port:3306,
  database: 'Prueba01'
});

export default pool