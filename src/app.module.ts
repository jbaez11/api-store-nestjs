import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { OrderController } from './controllers/order/order.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrderController,
    UserController,
    CustomerController,
    BrandsController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
