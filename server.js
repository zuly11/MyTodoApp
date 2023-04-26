const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/tododata');


const setup =async() => {
    try{
        await client.connect();
        console.log('connected');
    } catch(ex){
        console.log(ex);
    }
};



setup();
module.exports = client;