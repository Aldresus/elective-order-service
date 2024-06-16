import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';

export class OrderProductEntity implements Product {
  @ApiProperty()
  id_product: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
