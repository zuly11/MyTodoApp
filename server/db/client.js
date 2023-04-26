const pg = require('pg');
const app = express();
const express = require('express');
const client = new pg.Client('postgres://localhost/tododata');


const setup = async() => {
    try{
        await client.connect();
        console.log('connected');
        const SQL =`
        DROP TABLE IF EXISTS users;
        
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            email VARCHAR(100),
            "phoneNumber" VARCHAR(100),
            streetAddress VARCHAR(255),
            cityAddress VARCHAR(255),
            zipcode VARCHAR(100)
        );

        INSERT INTO users(name) VALUES('Betty');

        
        
        
        `;
        await client.query(SQL);
        console.log('data is seeded');
    } catch(ex){
        console.log(ex);
    }
};

setup();
module.exports = client;