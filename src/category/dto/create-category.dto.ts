import { Product } from '../../product/entities/product.entity';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  imageLink: string;

  product: Product;
}
