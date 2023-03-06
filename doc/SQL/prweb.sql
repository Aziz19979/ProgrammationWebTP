
CREATE TABLE book (
                      book_id INTEGER NOT NULL,
                      book_title VARCHAR(2560) NOT NULL,
                      book_authors VARCHAR(256) NOT NULL,
                      CONSTRAINT book_id PRIMARY KEY (book_id)
);


CREATE TABLE person (
                        person_id INTEGER NOT NULL,
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