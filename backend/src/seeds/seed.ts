import { DataSource } from 'typeorm';
import { Product } from '../products/product.entity';

const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Product],
});

async function seed() {
  await dataSource.initialize();

  const repo = dataSource.getRepository(Product);
  const count = await repo.count();
  if (count === 0) {
    const sample = repo.create({
      brand: 'SampleBrand',
      model: 'ModelX',
      season: 'vara',
      width: 205,
      height: 55,
      diameter: 16,
      price: 250,
      stock: 10,
      slug: 'samplebrand-modelx-205-55-r16',
    });
    await repo.save(sample);
  }

  await dataSource.destroy();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
