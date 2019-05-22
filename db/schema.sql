DROP DATABASE IF EXISTS burgers_db;

Create database burgers_db;

use burgers_db;

Create table burgers(
id int AUTO_INCREMENT primary key,
burger_name varchar(25),
devoured boolean
);

