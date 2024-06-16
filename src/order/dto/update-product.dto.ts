import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderProductDto extends PartialType(CreateOrderProductDto) {
  @ApiProperty()
  id_product: string; // the is defined because we dont create a product entry, its just an element of the array

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;
}
