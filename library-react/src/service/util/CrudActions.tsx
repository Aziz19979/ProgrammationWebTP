import {libraryAxios} from "../auth/auth";

export default class CrudActions {
    baseEntityUrl: string;

    constructor(baseEntityUrl: string) {
        this.baseEntityUrl = baseEntityUrl;
    }

    getEntityUrl = (id: number | string) => {
        return `${this.baseEntityUrl}/${id}`;
    }

    getAll = () => {
        return libraryAxios.get(this.baseEntityUrl);
    }

    get = (id: number | string) => {
        return libraryAxios.get(this.getEntityUrl(id));
    }

    create = (entity: any) => {
        return libraryAxios.post(this.baseEntityUrl, entity);
    }

    update = (id: number | string, entity: any) => {
        return libraryAxios.patch(this.getEntityUrl(id), entity);
    }

    delete = (id: number | string) => {
        return libraryAxios.delete(this.getEntityUrl(id));
    }
}