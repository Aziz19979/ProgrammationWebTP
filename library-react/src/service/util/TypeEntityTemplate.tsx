import EntityTemplate from "./EntityTemplate";

export default class TypeEntityTemplate extends EntityTemplate {
    isReadOnly: boolean = true;
    entitiesCache: { [entityIdentifier: number | string]: any } = {};

    initializeCache() {
        this.crudActions.getAll().then((response) => {
            response.data.forEach((typeEntity: any) => {
                this.entitiesCache[typeEntity[this.entityIdentifier.name]] = typeEntity;
            });
        });
    }

    getAndCache(entityId: number) {
        if (!entityId) {
            return null;
        }
        if (entityId in this.entitiesCache) {
            return this.entitiesCache[entityId];
        }
        let typeEntity = null;
        this.crudActions.get(entityId).then((response) => {
            typeEntity = response.data;
            this.entitiesCache[entityId] = typeEntity;
        });
        return typeEntity;
    }
    getAllCached() {
        return Object.values(this.entitiesCache);
    }
}