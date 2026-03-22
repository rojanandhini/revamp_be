const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  const restaurants = [
    { name: 'The Golden Spoon', imageUrl: 'https://picsum.photos', location: 'Midtown', offer: 'Complimentary Drink' },
    { name: 'Urban Bites', imageUrl: 'https://picsum.photos', location: 'The Arts District', offer: '2-for-1 Cocktails' },
    { name: 'Oceanic Grill', imageUrl: 'https://picsum.photos', location: 'East Village', offer: '2-for-1 Cocktails' },
    { name: 'Spicy Symphony', imageUrl: 'https://picsum.photos', location: 'East Village', offer: 'No delivery fee' },
    { name: 'Green Leaf Cafe', imageUrl: 'https://picsum.photos', location: 'Midtown', offer: '20% off total bill' },
    { name: 'Midnight Diner', imageUrl: 'https://picsum.photos', location: 'Westside', offer: '2-for-1 Cocktails' },
    { name: 'The Rustic Hearth', imageUrl: 'https://picsum.photos', location: 'The Arts District', offer: 'Complimentary Drink' },
    { name: 'Velvet Lounge', imageUrl: 'https://picsum.photos', location: 'The Waterfront', offer: 'No delivery fee' },
    { name: 'Harvest Table', imageUrl: 'https://picsum.photos', location: 'The Arts District', offer: '10% Student Discount' },
    { name: 'Neon Noodle', imageUrl: 'https://picsum.photos', location: 'Downtown', offer: '2-for-1 Cocktails' },
    { name: 'Blue Anchor', imageUrl: 'https://picsum.photos', location: 'Midtown', offer: 'No delivery fee' },
    { name: 'Pasta Paradise', imageUrl: 'https://picsum.photos', location: 'Westside', offer: 'Happy Hour: 5pm-7pm' },
    { name: 'Saffron Skies', imageUrl: 'https://picsum.photos', location: 'Central Plaza', offer: 'Free Dessert with Main' },
    { name: 'The Burger Joint', imageUrl: 'https://picsum.photos', location: 'Midtown', offer: 'Free Dessert with Main' },
    { name: 'Mountain Peak Bistro', imageUrl: 'https://picsum.photos', location: 'Downtown', offer: 'Free Dessert with Main' }
  ];

  // Using createMany for efficiency if your provider supports it (Postgres does!)
  await prisma.restaurants.createMany({
    data: restaurants,
  });

  console.log('Seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
