import { Cocktails } from 'src/cocktails/entity/cocktails.entitiy';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  
  @Entity()
  export class Glass extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { unique: true, nullable: false })
    name: string;
    
    @OneToMany(() => Cocktails, (cocktails) => cocktails.glass)
    cocktails: Glass[]
  }