import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment";

@Entity('services')
export class Service extends BaseEntity{

    @PrimaryGeneratedColumn ()
    id!: number

    @Column ({ name: 'name'})
    name!: string

    @Column ({ name: 'description'})
    description!: string

    @OneToMany(() => Appointment, (appointment) => appointment.service)
    appointments!: Appointment[];


}
