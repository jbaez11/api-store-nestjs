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

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //limit=10&offset=50&brand=futbol
    return { message: `product ${limit} ${offset} ${brand} ` };
  }

  @Get('filter')
  getProductFilter() {
    return `product 2 filter`;
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({
      message: `product ${productId}`,
    });
    // return {
    //   message: `product ${productId}`,
    // };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
  @Put(':id')
  uodate(@Param() id: number, @Body() payload: any) {
    return {
      message: 'accion de editar',
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param() id: number) {
    return {
      message: 'accion de eliminar',
      id,
    };
  }
}
