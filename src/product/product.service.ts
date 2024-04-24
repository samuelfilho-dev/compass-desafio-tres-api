import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) {
  }


  async create(createProductDto: CreateProductDto) {
    const dbProduct = this.productRepository.create(createProductDto);

    const dbCategory = await this.categoryRepository.findOneBy({ id: createProductDto.categoryId });

    if (!dbProduct.categories) {
      dbProduct.categories = [];
    }

    dbProduct.categories.push(dbCategory);

    return this.productRepository.save(dbProduct);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const dbProduct = await this.findOne(id);
    return this.productRepository.save({ ...dbProduct, ...updateProductDto });
  }

  async remove(id: string) {
    const dbProduct = await this.findOne(id);

    dbProduct.categories = [];
    await this.productRepository.save(dbProduct);

    return this.productRepository.remove(dbProduct);
  }
}
