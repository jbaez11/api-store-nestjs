import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { response, Response } from 'express';
import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //limit=10&offset=50&brand=futbol
    //return { message: `product ${limit} ${offset} ${brand} ` };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `product 2 filter`;
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productsService.findOne(+productId);
  }
  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.productsService.update(+id, payload);
    // return {
    //   message: 'accion de editar',
    //   id,
    //   payload,
    // };
  }
  @Delete(':id')
  delete(@Param() id: number) {
    return {
      message: 'accion de eliminar',
      id,
    };
  }
}
