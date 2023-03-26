import EntityTemplate from "../util/EntityTemplate";
import {API_URL} from "../../const/CommonConstants";
import {FieldInterface} from "../util/types";
import bookGenreEntity from "../book-genre/BookGenreEntity";
import bookEntity from "../book/BookEntity";
import personEntity from "../person/PersonEntity";


class BorrowEntity extends EntityTemplate {
    //         "borrowId": 22,
    //         "borrowDate": "2015-01-01",
    //         "borrowReturn": "2015-01-15",
    //         "personId": 22,
    //         "bookId": 22,
    private static borrowIdentifier: FieldInterface = {
        name: "borrowId",
        inputType: "number",
        label: "Borrow Id",
        gridColType: "number",
        editable: false,
    };
    constructor() {
        super("Borrow",
            "Borrows",
            API_URL + "/borrows", BorrowEntity.borrowIdentifier,
            [
                BorrowEntity.borrowIdentifier,
                {name: "borrowDate", inputType: "date", label: "Borrow Date", gridColType: "date"},
                {name: "borrowReturn", inputType: "date", label: "Borrow Return", gridColType: "date"},
                {name: "finishReading", inputType: "bool", label: "Finish Reading", gridColType: "boolean"},
                {name: "personId", inputType: "number", label: "Person Id", gridColType: "number", visible: false},
                {
                    name: "personne", inputType: "select", label: "Personne",
                    gridColType: "singleSelect",
                    valueGetter: params => params.row.bookId,
                    valueFormatter: params => personEntity.getAndCache(params.value)?.personFirstname + " " + personEntity.getAndCache(params.value)?.personLastname,
                    valueSetter: params => {
                        return {...params.row, personId: params.value}
                    },
                    valueOptions: () => {
                        return personEntity.getAllCached().map((personne: any) => {
                            return {value: personne.personId, label: personne.personFirstname + " " + personne.personLastname}
                        })
                    }
                },
                {name: "bookId", inputType: "number", label: "Book Id", gridColType: "number", visible: false},
                {
                    name: "book", inputType: "select", label: "Book",
                    gridColType: "singleSelect",
                    valueGetter: params => params.row.bookId,
                    valueFormatter: params => bookEntity.getAndCache(params.value)?.bookTitle,
                    valueSetter: params => {
                        return {...params.row, bookId: params.value}
                    },
                    valueOptions: () => {
                        return bookEntity.getAllCached().map((book: any) => {
                            return {value: book.bookId, label: book.bookTitle}
                        })
                    }
                }
            ]
        );
    }
}

const borrowEntity = new BorrowEntity();

export default borrowEntity;