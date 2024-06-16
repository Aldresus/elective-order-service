import { ApiProperty } from '@nestjs/swagger';
import { Menu } from '@prisma/client';
import { OrderProductEntity } from './product.entity';

export class OrderMenuEntity implements Menu {
  @ApiProperty()
  id_menu: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ type: [OrderProductEntity] })
  products: Array<OrderProductEntity>;

  constructor(partial: Partial<Menu>) {
    Object.assign(this, partial);
  }
}
