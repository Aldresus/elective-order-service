import { ApiProperty } from '@nestjs/swagger';
import type { Order } from '@prisma/client';

export class OrderEntity implements Order {
    @ApiProperty()
    id: string;

    @ApiProperty()
    order_date: Date;

    @ApiProperty()
    status: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    postal_code: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    notes: string;

    @ApiProperty()
    restaurant_to_delivery_datetime: Date;

    @ApiProperty()
    received_datetime: Date;

    @ApiProperty()
    restaurant_accepted_datetime: Date;

    @ApiProperty()
    delivery_accepted_datetime: Date;

    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<OrderEntity>) {
        Object.assign(this, partial);
  }

}
