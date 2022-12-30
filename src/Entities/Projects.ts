import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Devs } from './Devs'

@Entity()
export class Projects extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: string;

    @Column()
    devs: string;

    @Column()
    roles: string;

    @OneToMany(() => Devs, (projects) => projects.devs)
    projects: Devs[]
}