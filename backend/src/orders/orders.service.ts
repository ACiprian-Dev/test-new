import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private repo: Repository<Order>,
  ) {}

  create(dto: CreateOrderDto): Promise<Order> {
    const order = this.repo.create({ ...dto });
    return this.repo.save(order);
  }

  findAll(): Promise<Order[]> {
    return this.repo.find();
  }
}
