const client = require('./client');

const syncTables = async () => {
    try {
        const SQL =`
        DROP TABLE IF EXISTS users;
        
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            email VARCHAR(100),
            "phoneNumber" VARCHAR(100),
            streetAddress VARCHAR(255),
            cityAddress VARCHAR(255),
            zipcode VARCHAR(100)
        );
        
        
        
        `;
        await client.query(SQL);


    } catch (error) {
      throw error;
    }
};


module.exports = {
    client,
}