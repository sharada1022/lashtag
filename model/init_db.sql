DROP TABLE if exists clients;
DROP TABLE if exists users;
DROP TABLE if exists appointments;

CREATE TABLE clients(
    name VARCHAR(100) not null,
    email VARCHAR(100) NOT NULL,
    number VARCHAR(20),
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    );

    INSERT INTO clients(
        name,
        email,
        number
    )
    VALUES("Jane Doe", "janedoe@email.com", "012345678"),
     ("April Jones", "april@email.com", "0987654321"),
      ("Trixie Mattel", "trixie@email.com", "0201234567"), 
      ("Naomi Campbell", "ncampbell@email.com", "9876543210"),
       ("Stevie Nicks", "nicksteves@email.com", "5432109876");


CREATE TABLE users(
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
);


INSERT INTO users(username,email,password)   
VALUES("Jane Doe", "janedoe@email.com", "123"),
    ("April Jones", "april@email.com", "567"),
    ("Trixie Mattel", "trixie@e mail.com", "897"),
    ("Naomi Campbell", "ncampbell@email.com", "321"),
    ("Stevie Nicks", "nicksteves@email.com", "879");


CREATE TABLE appointments(   
    date VARCHAR(100) NOT NULL,
    month VARCHAR(100) NOT NULL,
    time VARCHAR(100) NOT NULL,
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    );


    INSERT INTO appointments(date, month, time)
    VALUES("2021-08-19", "August", "HH:MM:SS"),
          ("2021-08-20", "August", "HH:MM:SS"),
          ("2021-08-21", "August", "HH:MM:SS"),
          ("2021-08-22","August", "HH:MM:SS"),
          ("2021-08-23", "August", "HH:MM:SS");