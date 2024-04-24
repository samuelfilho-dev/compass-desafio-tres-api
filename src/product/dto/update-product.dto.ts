import { IsBoolean, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsNumber()
  @IsPositive()
  category_id: number;

  @IsString()
  description: string;

  @IsString()
  large_description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  discount_price: number;

  @IsNumber()
  discount_percent: number;

  @IsBoolean()
  is_new: boolean;

  @IsString()
  image_link: string;

  @IsString()
  other_images_link: string;
}
