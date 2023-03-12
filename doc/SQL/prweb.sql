-- drop public schema and recreate it
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
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
                      CONSTRAINT book_id PRIMARY KEY (book_id)
);

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


CREATE TABLE borrow (
                        borrow_id INTEGER NOT NULL,
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