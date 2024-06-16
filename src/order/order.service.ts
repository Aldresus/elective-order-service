import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    console.log(createOrderDto);

    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  findById(id: string) {
    return this.prisma.order.findUnique({
      where: {
        id_order: id,
      },
    });
  }

  findMany(params: {
    id_order: string;
    id_restaurateur: string;
    id_user: string;
    status: string;
  }) {
    console.log(params);

    return this.prisma.order.findMany({
      where: {
        AND: [
          {
            id_order: params.id_order === '' ? undefined : params.id_order,
          },
          {
            id_restaurant:
              params.id_restaurateur === ''
                ? undefined
                : params.id_restaurateur,
          },
          {
            id_user: params.id_user === '' ? undefined : params.id_user,
          },
          {
            status: params.status === '' ? undefined : params.status,
          },
        ],
      },
    });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: {
        id_order: id,
      },
      data: updateOrderDto,
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({
      where: {
        id_order: id,
      },
    });
  }
}
