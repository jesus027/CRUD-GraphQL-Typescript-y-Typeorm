import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Projects } from './Projects';
import { Especialidad } from './Especialidad'

@Entity()
export class Devs extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    projects: string;

    @Column()
    roles: string;

    @ManyToOne(() => Projects, (devs) => devs.projects)
    devs: Projects[]
}