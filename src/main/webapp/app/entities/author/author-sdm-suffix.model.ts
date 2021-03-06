import { BaseEntity } from './../../shared';

export class AuthorSdmSuffix implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public books?: BaseEntity[],
    ) {
    }
}
