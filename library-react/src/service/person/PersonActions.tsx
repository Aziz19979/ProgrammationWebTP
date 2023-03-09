import axios from "axios";
import {API_URL} from "../../const/CommonConstants";

export const getPersons = async () => {
    return axios.get(API_URL + '/persons');
};