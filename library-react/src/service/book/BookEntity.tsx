import EntityTemplate from "../util/EntityTemplate";
import {API_URL} from "../../const/CommonConstants";
import {FieldInterface} from "../util/types";
import bookGenreEntity from "../book-genre/BookGenreEntity";
import TypeEntityTemplate from "../util/TypeEntityTemplate";


class BookEntity extends TypeEntityTemplate {
    private static bookIdentifier:FieldInterface = {
        name: "bookId",
        inputType: "number",
        label: "Book Id",
        gridColType: "number",
        editable: false,
    };

    constructor() {
        super("Book",
            "Books",
            API_URL + "/books",
            BookEntity.bookIdentifier,
            [
                BookEntity.bookIdentifier,
                {name: "bookTitle", inputType: "string", label: "Title", width: 300},
                {name: "bookAuthors", inputType: "string", label: "Authors", width: 300},
                {
                    name: "bookGenreId",
                    inputType: "number",
                    label: "Genre Id",
                    gridColType: "number",
                    visible: false,
                },
                {
                    name: "bookGenre", inputType: "select", label: "Genre",
                    gridColType: "singleSelect",
                    valueGetter: params => params.row.bookGenreId,
                    valueFormatter: params => bookGenreEntity.getAndCache(params.value)?.bookGenreName,
                    valueSetter: params => {
                        return {...params.row, bookGenreId: params.value}
                    },
                    valueOptions: () => {
                        return bookGenreEntity.getAllCached().map((bookGenre: any) => {
                            return {value: bookGenre.bookGenreId, label: bookGenre.bookGenreName}
                        })
                    }
                }
            ]);
    }
}

const bookEntity = new BookEntity();

bookEntity.initializeCache();

export default bookEntity;