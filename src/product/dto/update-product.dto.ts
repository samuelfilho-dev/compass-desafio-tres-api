import { IsBoolean, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateProductDto {
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

  @IsBoolean()
  isNew: boolean;

  @IsString()
  imageLink: string;

  @IsString()
  otherImagesLink: string;
}
