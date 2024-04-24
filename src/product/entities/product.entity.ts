import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 10, nullable: false })
  sku: string;

  @OneToMany(() => Category, (category) => category.product, {
    nullable: false,
  })
  categories: Category[];

  @Column({ length: 250, nullable: false })
  description: string;

  @Column({ nullable: false })
  large_description: string;

  @Column({ nullable: false })
  price: number;

  @Column()
  discount_price: number;

  @Column()
  discount_percent: number;

  @Column({ default: false })
  is_new: boolean;

  @Column({ length: 250 })
  image_link: string;

  @Column()
  other_images_link: string;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;
}
