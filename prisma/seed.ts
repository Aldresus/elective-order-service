import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  let order1 = await prisma.order.create({
    data: {
      order_date: new Date(),
      status: 'Pending',
      price: 10.0,
      postal_code: '10001',
      address: '123 Main St',
      city: 'New York',
      delivery_accepted_datetime: new Date(),
      restaurant_accepted_datetime: new Date(),
      id_restaurant: '111111111111111111111111',
      id_user: '111111111111111111111111',
      notes: '',
      received_datetime: new Date(),
      restaurant_to_delivery_datetime: new Date(),
      products: [
        {
          name: 'Pasta Alfredo',
          price: 10.0,
          description: 'Pate au parmesan et beurre, delicioso !',
          id_product: '111111111111111111111111',
          quantity: 1,
        },
        {
          name: 'Pasta Carbonara',
          price: 10.0,
          description: 'Pate au grano padano, oeuf et pancetta, delicioso !',
          id_product: '111111111111111111111111',
          quantity: 1,
        },
      ],
      menus: [
        {
          name: 'Pasta Dellamama',
          price: 10.0,
          description: 'Formule pate, boisson et beurre, delicioso !',
          id_menu: '111111111111111111111111',
          products: [
            {
              name: 'Pasta Alfredo',
              price: 10.0,
              description: 'Pate au parmesan et beurre, delicioso !',
              id_product: '111111111111111111111111',
              quantity: 1,
            },
            {
              name: 'coca',
              price: 10.0,
              description: 'Coca bien frais chacal',
              id_product: '111111111111111111111111',
              quantity: 1,
            },
            {
              name: 'beurre doux',
              price: 10.0,
              description: 'Beurre bien doux chacal',
              id_product: '111111111111111111111111',
              quantity: 1,
            },
          ],
        },
      ],
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
