--UP
   
   CREATE TABLE Person(
       id INTERGER  PRIMARY KEY AUTOINCREMENT,
       name TEXT,
       email TEXT
   );

   CREATE TABLE Vehicle(
       id INTERGER  PRIMARY KEY AUTOINCREMENT,
       brand TEXT,
       model TEXT,
       ownerId INTERGER  REFERENCES Person(id)
   );

--DOWN

DROP TABLE Person;
DROP TABLE Vehicle;