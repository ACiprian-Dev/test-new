import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,
  ) {}

  create(dto: CreateProductDto): Promise<Product> {
    const product = this.repo.create({ ...dto });
    return this.repo.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    await this.repo.update(id, dto);
    return this.findOne(id) as Promise<Product>;
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
