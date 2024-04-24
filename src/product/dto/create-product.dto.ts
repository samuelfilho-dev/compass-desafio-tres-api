import { IsBoolean, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsNumber()
  @IsPositive()
  categoryId: number;

  @IsString()
  description: string;

  @IsString()
  largeDescription: string;

  @IsNumber()
  price: number;

  @IsNumber()
  discountPrice: number;

  @IsNumber()
  discountPercent: number;


  isNew: boolean;

  @IsString()
  imageLink: string;

  @IsString()
  otherImagesLink: string;
}
