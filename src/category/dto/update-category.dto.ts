import { IsString } from 'class-validator';
import { Product } from '../../product/entities/product.entity';

export class UpdateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  imageLink: string;

  product: Product;
}
