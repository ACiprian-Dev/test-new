import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { Product } from './products/product.entity';
import { Order } from './orders/order.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Product, Order, User],
      synchronize: true,
    }),
    ProductsModule,
    OrdersModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
