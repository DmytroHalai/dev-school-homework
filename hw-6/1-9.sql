CREATE TABLE users(
    id SERIAL,
    username VARCHAR UNIQUE,
    email VARCHAR UNIQUE,
    first_name VARCHAR,
    last_name VARCHAR,
    password VARCHAR
);

INSERT INTO users VALUES(1, 'DimGa','ILoveDEV@gmail.com','Dima','Halai','qwerty')
RETURNING *;