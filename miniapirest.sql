CREATE DATABASE if not EXISTS miniapirestdb;
use miniapirestdb;
CREATE TABLE users (
	id bigint PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) not null,
    email varchar(100) not null unique,
    passwrd varchar(50) not null,
    rol varchar(100) not null,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
 	id_task bigint PRIMARY key AUTO_INCREMENT,
    title varchar (100),
    id_user bigint,
    assigned_to varchar(100),
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP
 )
 
 CREATE TABLE active_tokens (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  token VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);