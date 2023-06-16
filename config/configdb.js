const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
})