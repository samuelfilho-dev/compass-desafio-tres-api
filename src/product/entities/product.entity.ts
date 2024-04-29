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
    orphanedRowAction: 'nullify',
    eager: true,
  })
  categories: Category[];

  @Column({ length: 250, nullable: false })
  description: string;

  @Column({ name: 'large_description', nullable: false })
  largeDescription: string;

  @Column({ nullable: false })
  price: number;

  @Column({ name: 'discount_price' })
  discountPrice: number;

  @Column({ name: 'discount_percent' })
  discountPercent: number;

  @Column({ name: 'is_new' })
  isNew: boolean;

  @Column({ length: 250 })
  imageLink: string;

  @Column({ name: 'other_images_link' })
  otherImagesLink: string;

  @CreateDateColumn({ name: 'create_date' })
  createDate: Date;

  @UpdateDateColumn({ name: 'update_date' })
  updateDate: Date;
}
