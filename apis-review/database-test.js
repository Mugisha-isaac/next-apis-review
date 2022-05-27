const  sqlite3  = require("sqlite3");
const {open} = require('sqlite');

 async function setUp(){
   const db = await open({
       filename:'./mydb.sqlite',
       driver:sqlite3.Database
   });

   await db.migrate({
       force:'last'
   })

   const people = await db.all('SELECT * FROM Person');
   console.log("all people", JSON.stringify(people,null,2));

   const vehicles = await db.all('SELECT * FROM Vehicle');
   console.log("all vehicles", JSON.stringify(vehicles,null,2));

}

setUp();