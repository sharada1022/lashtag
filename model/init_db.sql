DROP TABLE if exists clients;
CREATE TABLE clients(
    name VARCHAR(100) not null,
    email VARCHAR(100) NOT NULL,
    number VARCHAR(20),
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    );

-- CREATE TABLE procedures(
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT

--     );

    INSERT INTO clients(
        name,
        email,
        number
    )
    VALUES("Jane Doe", "janedoe@email.com", "012345678"), ("April Jones", "april@email.com", "0987654321"), ("Trixie Mattel", "trixie@email.com", "0201234567"), ("Naomi Campbell", "ncampbell@email.com", "9876543210"), ("Stevie Nicks", "nicksteves@email.com", "5432109876");