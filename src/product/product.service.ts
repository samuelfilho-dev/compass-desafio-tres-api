import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';
import { PaginationDto } from './dto/PaginationDto';
import { DEFAULT_PAGE_SIZE } from '../utils/commom.constants';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {
  }

  async create(createProductDto: CreateProductDto) {
    const dbProduct = this.productRepository.create(createProductDto);

    for (let categoryId of createProductDto.categoryIds) {
      this.categoryRepository.findOneBy({ id: categoryId }).then((category) => {
        dbProduct.categories.push(category);
      });

    }

    if (!dbProduct.categories) {
      dbProduct.categories = [];
    }

    return this.productRepository.save(dbProduct);
  }

  findAll(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto;

    return this.productRepository.find({
      skip: offset,
      take: limit ?? DEFAULT_PAGE_SIZE.USER,
    });
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
