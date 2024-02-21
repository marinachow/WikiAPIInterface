CREATE DATABASE IF NOT EXISTS wiki_db;

USE wiki_db;

CREATE TABLE IF NOT EXISTS ProgrammingLanguages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    language_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS SearchResults (
    id INT AUTO_INCREMENT PRIMARY KEY,
    language_id INT,
    title VARCHAR(255) NOT NULL,
    snippet TEXT NOT NULL,
    link TEXT NOT NULL,
    date DATE,
    wordcount INT,
    FOREIGN KEY (language_id) REFERENCES ProgrammingLanguages(id)
);
