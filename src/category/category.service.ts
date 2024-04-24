import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {
  }

  create(createCategoryDto: CreateCategoryDto) {
    const dbCategory = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(dbCategory);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({ id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const dbCategory = await this.findOne(id);

    return this.categoryRepository.save({ ...dbCategory, ...updateCategoryDto });
  }

  async remove(id: number) {
    const dbCategory = await this.findOne(id);
    return this.categoryRepository.remove(dbCategory);
  }
}
