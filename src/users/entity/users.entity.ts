import { Cocktails } from 'src/cocktails/entity/cocktails.entitiy';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    OneToMany
  } from 'typeorm';
  
  @Entity()
  export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    userName: string;
  
    @Column('varchar', { unique: true, nullable: false })
    email: string;
  
    @Column('varchar')
    password: string;
  
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;
  
    @OneToMany(() => Cocktails, (cocktails) => cocktails.user)
    cocktails: Users[]
   
  }