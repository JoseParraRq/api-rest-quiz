import { Category } from 'src/category/category.entity';
import { Glass } from 'src/glass/glass.entity';
import { Users } from 'src/users/entity/users.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
  
  @Entity()
  export class Cocktails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @ManyToOne(() => Category, (category) => category.cocktails)
    category: Category
    
    @ManyToOne(() => Glass, (glass) => glass.cocktails)
    glass: Glass

    @ManyToOne(() => Users, (user) => user.cocktails)
    user: Users

  }