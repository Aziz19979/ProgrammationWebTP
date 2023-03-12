import EntityTemplate from "../util/EntityTemplate";
import {API_URL} from "../../const/CommonConstants";
import {FieldInterface} from "../util/types";


class BookEntity extends EntityTemplate {
    private static bookIdentifier:FieldInterface = {name: "bookId", inputType: "number", label: "Book Id", gridColType: "number"};

    constructor() {
        super("Book", API_URL + "/books", BookEntity.bookIdentifier, [
            BookEntity.bookIdentifier,
            {name: "bookTitle", inputType: "string", label: "Title", width: 300},
            {name: "bookAuthors", inputType: "string", label: "Authors", width: 300},
            {name: "bookGenreId", inputType: "number", label: "Genre", gridColType:"number", visible: false,},
        ]);
    }
}

const bookEntity = new BookEntity();

export default bookEntity;