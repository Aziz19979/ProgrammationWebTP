import EntityTemplate from "../util/EntityTemplate";
import {API_URL} from "../../const/CommonConstants";
import {FieldInterface} from "../util/types";
import TypeEntityTemplate from "../util/TypeEntityTemplate";


class PersonEntity extends TypeEntityTemplate {
    private static personIdentifier: FieldInterface = {
        name: "personId",
        inputType: "number",
        label: "Person Id",
        gridColType: "number",
        editable: false,
    };

    constructor() {
        super("Person",
            "Persons",
            API_URL + "/persons", PersonEntity.personIdentifier,
            [
                PersonEntity.personIdentifier,
                {name: "personFirstname", inputType: "string", label: "First Name", width: 300},
                {name: "personLastname", inputType: "string", label: "Last Name", width: 300},
                {
                    name: "personBirthdate", inputType: "date", label: "Birth Date", gridColType: "date",
                    valueGetter: params => new Date(params.value),
                    valueFormatter: params => new Date(params.value).toLocaleDateString(),
                },
            ]
        );
    }
}

const personEntity = new PersonEntity();

personEntity.initializeCache();
export default personEntity;