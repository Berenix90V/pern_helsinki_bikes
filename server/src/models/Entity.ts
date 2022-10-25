import {InferAttributes, InferCreationAttributes, Model} from "sequelize";

export abstract class  Entity extends Model<InferAttributes<Entity>, InferCreationAttributes<Entity>>{

    static fetchAll: () => Promise<Entity[]>
    static createNew: () => Promise<Entity>
}
