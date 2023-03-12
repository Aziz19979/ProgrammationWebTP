import {API_URL} from "../../const/CommonConstants";
import {FieldInterface} from "../util/types";
import TypeEntityTemplate from "../util/TypeEntityTemplate";


class BookGenreEntity extends TypeEntityTemplate {
    private static bookGenreIdentifier: FieldInterface = {
        name: "bookGenreId",
        inputType: "number",
        label: "BookGenre Id",
        gridColType: "number"
    };

    constructor() {
        super("Book Genre",
            "Book Genres",
            API_URL + "/book_genres",
            BookGenreEntity.bookGenreIdentifier,
            [
                BookGenreEntity.bookGenreIdentifier,
                {name: "bookGenreName", inputType: "string", label: "Book Genre", width: 300},
            ]);
    }
}

const bookGenreEntity = new BookGenreEntity();

bookGenreEntity.initializeCache();

export default bookGenreEntity;