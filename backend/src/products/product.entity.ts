import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  season: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  diameter: number;

  @Column('decimal')
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column({ unique: true })
  slug: string;
}
