import {BaseEntity} from "typeorm";

export abstract class AbsEntity extends BaseEntity{

    static fetchAll: () => Promise<AbsEntity[]>
    static createNew: () => Promise<AbsEntity>
}