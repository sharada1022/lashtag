DROP TABLE if exists clients;
CREATE TABLE clients(
    name VARCHAR(100) not null,
    email VARCHAR(100) NOT NULL,
    number INT
    );

CREATE TABLE procedures(
    id INT NOT NULL KEY AUTO_INCREMENT
    );