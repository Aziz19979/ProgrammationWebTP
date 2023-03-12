import EntityTemplate from "../util/EntityTemplate";
import {API_URL} from "../../const/CommonConstants";
import {FieldInterface} from "../util/types";


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
                {name: "personId", inputType: "number", label: "Person Id", gridColType: "number"},
                {name: "bookId", inputType: "number", label: "Book Id", gridColType: "number"},

            ]
        );
    }
}

const borrowEntity = new BorrowEntity();

export default borrowEntity;