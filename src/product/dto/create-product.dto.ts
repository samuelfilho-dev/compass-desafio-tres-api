import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsArray()
  categoryIds: number[];

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
