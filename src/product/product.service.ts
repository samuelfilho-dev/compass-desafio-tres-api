import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const dbProduct = this.productRepository.create(createProductDto);

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

    return this.productRepository.remove(dbProduct);
  }
}
