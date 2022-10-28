/*
import "reflect-metadata"
import{ Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {AbsEntity} from "./Entity";

@Entity({name:"stations", synchronize: false})
export class Station extends AbsEntity {
    @PrimaryGeneratedColumn()
    declare StationID: number

    @Column({
        length: 100,
        nullable: false
    })
    declare Nimi: string

    @Column({
        length: 100,
        nullable: false
    })
    declare Namn: string

    @Column({
        length: 100,
        nullable:false
    })
    declare Name: string

    @Column({
        type: "text"
    })
    declare Osoite: string

    @Column({
        type: "text"
    })
    declare Adress: string

    @Column({
        length: 100,
    })
    declare Kaupunki: string

    @Column({
        length: 100,
    })
    declare Stad: string

    @Column()
    declare Operaattor: string

    @Column({
        type: "int",
        nullable: false
    })
    declare Kapasiteet: number

    @Column({
        type: "float",
        nullable:false
    })
    declare x: number
    @Column({
        type: "float",
        nullable: false
    })
    declare y: number

    static fetchAll(){
        return Station.find()
    }


}
*/

// TODO: after having changed the database setting up default values for Kaupunki and Stad, come here to check if some change is needed