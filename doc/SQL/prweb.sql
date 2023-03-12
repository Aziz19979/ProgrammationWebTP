-- drop public schema and recreate it
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

--  create book type table

CREATE SEQUENCE book_genre_book_genre_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE book_genre (
                           book_genre_id INTEGER NOT NULL DEFAULT nextval('book_genre_book_genre_id_seq'::regclass),
                           book_genre_name VARCHAR(128) NOT NULL,
                           CONSTRAINT book_genre_id PRIMARY KEY (book_genre_id)
);

-- feed initial genre data
INSERT INTO book_genre (book_genre_id, book_genre_name)
VALUES (1, 'Action and Adventure'),
       (2, 'Anthology'),
       (3, 'Classic'),
       (4, 'Comic and Graphic Novel'),
       (5, 'Crime and Detective'),
       (6, 'Drama'),
       (7, 'Fairytale'),
       (8, 'Fantasy'),
       (9, 'Historical Fiction'),
       (10, 'Horror'),
       (11, 'Literary Fiction'),
       (12, 'Mystery'),
       (13, 'Mythology'),
       (14, 'Poetry'),
       (15, 'Political Thriller'),
       (16, 'Romance'),
       (17, 'Satire'),
       (18, 'Science Fiction'),
       (19, 'Short Story'),
       (20, 'Suspense'),
       (21, 'Thriller'),
       (22, 'Western'),
       (23, 'Young Adult');

SELECT setval('book_genre_book_genre_id_seq', 23, true);


CREATE SEQUENCE book_book_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE book (
                      book_id INTEGER NOT NULL DEFAULT nextval('book_book_id_seq'::regclass),
                      book_title VARCHAR(2560) NOT NULL,
                      book_authors VARCHAR(256) NOT NULL,
                      book_genre_id INTEGER NOT NULL,
                      CONSTRAINT book_id PRIMARY KEY (book_id)
);

ALTER TABLE book ADD CONSTRAINT book_genre_book_fk
    FOREIGN KEY (book_genre_id)
        REFERENCES book_genre (book_genre_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
        NOT DEFERRABLE;

-- feed initial book data 2 for each genre
INSERT INTO book (book_id, book_title, book_authors, book_genre_id)
VALUES (1, 'The Lord of the Rings', 'J. R. R. Tolkien', 1),
       (2, 'The Hobbit', 'J. R. R. Tolkien', 1),
       (3, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 2),
       (4, 'The Adventures of Tom Sawyer', 'Mark Twain', 2),
       (5, 'Pride and Prejudice', 'Jane Austen', 3),
       (6, 'The Adventures of Huckleberry Finn', 'Mark Twain', 3),
       (7, 'The Little Prince', 'Antoine de Saint-Exupéry', 4),
       (8, 'The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 4),
       (9, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 5),
       (10, 'The Adventures of Tom Sawyer', 'Mark Twain', 5),
       (11, 'The Great Gatsby', 'F. Scott Fitzgerald', 6),
       (12, 'Jane Eyre', 'Charlotte Brontë', 6),
       (13, 'Cinderella', 'Charles Perrault', 7),
       (14, 'Snow White', 'The Brothers Grimm', 7),
       (15, 'Harry Potter and the Sorcerer''s Stone', 'J. K. Rowling', 8),
       (16, 'The Lion, the Witch and the Wardrobe', 'C. S. Lewis', 8),
       (17, 'The Adventures of Huckleberry Finn', 'Mark Twain', 9),
       (18, 'The Great Gatsby', 'F. Scott Fitzgerald', 9),
       (19, 'The Picture of Dorian Gray', 'Oscar Wilde', 10),
       (20, 'Dracula', 'Bram Stoker', 10),
       (21, 'The Great Gatsby', 'F. Scott Fitzgerald', 11),
       (22, 'The Adventures of Huckleberry Finn', 'Mark Twain', 11),
       (23, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 12),
       (24, 'The Adventures of Tom Sawyer', 'Mark Twain', 12),
       (25, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 13),
       (26, 'The Adventures of Tom Sawyer', 'Mark Twain', 13),
       (27, 'The Raven', 'Edgar Allan Poe', 14),
       (28, 'The Road Not Taken', 'Robert Frost', 14),
       (29, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 15),
       (30, 'The Adventures of Tom Sawyer', 'Mark Twain', 15),
       (31, 'Pride and Prejudice', 'Jane Austen', 16),
       (32, 'The Great Gatsby', 'F. Scott Fitzgerald', 16),
       (33, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 17),
       (34, 'The Adventures of Tom Sawyer', 'Mark Twain', 17),
       (35, 'The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 18),
       (36, 'The Little Prince', 'Antoine de Saint-Exupéry', 18),
       (37, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 19),
       (38, 'The Adventures of Tom Sawyer', 'Mark Twain', 19),
       (39, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 20),
       (40, 'The Adventures of Tom Sawyer', 'Mark Twain', 20),
       (41, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 21),
       (42, 'The Adventures of Tom Sawyer', 'Mark Twain', 21),
       (43, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 22),
       (44, 'The Adventures of Tom Sawyer', 'Mark Twain', 22),
       (45, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 23),
       (46, 'The Adventures of Tom Sawyer', 'Mark Twain', 23);

SELECT setval('book_book_id_seq', 46, true);

CREATE SEQUENCE person_person_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE person (
                        person_id INTEGER NOT NULL DEFAULT nextval('person_person_id_seq'::regclass),
                        person_birthdate DATE NOT NULL,
                        person_firstname VARCHAR(128) NOT NULL,
                        person_lastname VARCHAR(128) NOT NULL,
                        CONSTRAINT person_id PRIMARY KEY (person_id)
);

-- feed random different person data
INSERT INTO person (person_id, person_birthdate, person_firstname, person_lastname)
VALUES (1, '1981-01-01', 'Adam', 'Smith'),
       (2, '1982-01-01', 'John', 'Doe'),
       (3, '1983-01-01', 'Jane', 'Doe'),
       (4, '1984-01-01', 'John', 'Smith'),
       (5, '1985-01-01', 'Jane', 'Smith'),
       (6, '1986-01-01', 'John', 'Doe'),
       (7, '1987-01-01', 'Jane', 'Doe'),
       (8, '1988-01-01', 'John', 'Smith'),
       (9, '1989-01-01', 'Jane', 'Smith'),
       (10, '1990-01-01', 'John', 'Doe'),
       (11, '1991-01-01', 'Jane', 'Doe'),
       (12, '1992-01-01', 'John', 'Smith'),
       (13, '1993-01-01', 'Jane', 'Smith'),
       (14, '1994-01-01', 'John', 'Doe'),
       (15, '1995-01-01', 'Jane', 'Doe'),
       (16, '1996-01-01', 'John', 'Smith'),
       (17, '1997-01-01', 'Jane', 'Smith'),
       (18, '1998-01-01', 'John', 'Doe'),
       (19, '1999-01-01', 'Jane', 'Doe'),
       (20, '2000-01-01', 'John', 'Smith'),
       (21, '2001-01-01', 'Jane', 'Smith'),
       (22, '2002-01-01', 'John', 'Doe'),
       (23, '2003-01-01', 'Jane', 'Doe'),
       (24, '2004-01-01', 'John', 'Smith'),
       (25, '2005-01-01', 'Jane', 'Smith'),
       (26, '2006-01-01', 'John', 'Doe'),
       (27, '2007-01-01', 'Jane', 'Doe');

SELECT setval('person_person_id_seq', 27, true);



CREATE SEQUENCE borrow_borrow_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE borrow (
                        borrow_id INTEGER NOT NULL DEFAULT nextval('borrow_borrow_id_seq'::regclass),
                        borrow_date DATE NOT NULL,
                        borrow_return DATE NOT NULL,
                        person_id INTEGER NOT NULL,
                        book_id INTEGER NOT NULL,
                        CONSTRAINT borrow_id PRIMARY KEY (borrow_id)
);


ALTER TABLE borrow ADD CONSTRAINT book_borrow_fk
    FOREIGN KEY (book_id)
        REFERENCES book (book_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
        NOT DEFERRABLE;

ALTER TABLE borrow ADD CONSTRAINT person_borrow_fk
    FOREIGN KEY (person_id)
        REFERENCES person (person_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
        NOT DEFERRABLE;


-- feed initial borrow data
INSERT INTO borrow (borrow_id, borrow_date, borrow_return, person_id, book_id)
VALUES (1, '2015-01-01', '2015-01-15', 1, 1),
       (2, '2015-01-01', '2015-01-15', 2, 2),
       (3, '2015-01-01', '2015-01-15', 3, 3),
       (4, '2015-01-01', '2015-01-15', 4, 4),
       (5, '2015-01-01', '2015-01-15', 5, 5),
       (6, '2015-01-01', '2015-01-15', 6, 6),
       (7, '2015-01-01', '2015-01-15', 7, 7),
       (8, '2015-01-01', '2015-01-15', 8, 8),
       (9, '2015-01-01', '2015-01-15', 9, 9),
       (10, '2015-01-01', '2015-01-15', 10, 10),
       (11, '2015-01-01', '2015-01-15', 11, 11),
       (12, '2015-01-01', '2015-01-15', 12, 12),
       (13, '2015-01-01', '2015-01-15', 13, 13),
       (14, '2015-01-01', '2015-01-15', 14, 14),
       (15, '2015-01-01', '2015-01-15', 15, 15),
       (16, '2015-01-01', '2015-01-15', 16, 16),
       (17, '2015-01-01', '2015-01-15', 17, 17),
       (18, '2015-01-01', '2015-01-15', 18, 18),
       (19, '2015-01-01', '2015-01-15', 19, 19),
       (20, '2015-01-01', '2015-01-15', 20, 20),
       (21, '2015-01-01', '2015-01-15', 21, 21),
       (22, '2015-01-01', '2015-01-15', 22, 22),
       (23, '2015-01-01', '2015-01-15', 23, 23),
       (24, '2015-01-01', '2015-01-15', 24, 24),
       (25, '2015-01-01', '2015-01-15', 25, 25),
       (26, '2015-01-01', '2015-01-15', 26, 26),
       (27, '2015-01-01', '2015-01-15', 27, 27);

SELECT setval('borrow_borrow_id_seq', 27, true);


CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- user have username and password and can login to the site
--  username is unique

CREATE TABLE users (
                        id INTEGER NOT NULL DEFAULT nextval('user_id_seq'::regclass),
                        username VARCHAR(128) NOT NULL,
                        password VARCHAR(128) NOT NULL,
                        email VARCHAR(128) NOT NULL,
                        admin BOOLEAN NOT NULL DEFAULT FALSE,
                        CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE UNIQUE INDEX user_username_uindex
    ON users (username);

-- insert default admin user
-- password is admin encrypted with bcrypt
INSERT INTO users (username, password, email, admin)
Values ('admin', '$2a$10$tR4NMaRiVG.QZdXoCsmEUuDltA7Siy0kisCbUwT3p3P3s9wQWdySi', 'admin@localhost', TRUE);

-- insert default user
-- password is user encrypted with bcrypt
INSERT INTO users (username, password, email, admin)
Values ('user', '$2a$10$nbNEAKss3/jeNdOPfCqel.cLltnDIfE15jpGFEo7rZw1aY/5nAbzi', 'user@localhost', FALSE);

SELECT setval('user_id_seq', 2, true);