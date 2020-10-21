import { ProductType } from "../../types/product-type.enum";
import { Product } from "../../schemas/product.schema";

import * as faker from 'faker'

export const mockProductsList: Product[] = [
  {
    name: faker.random.word(),
    description: faker.random.words(),
    type: faker.random.arrayElement([ProductType.PLUGIN, ProductType.THEME]),
    developer: {
      name: faker.company.companyName()
    },
    version: String(faker.random.float({ precision: 3 })),
    supportUrl: faker.internet.url()
  },
  {
    name: faker.random.word(),
    description: faker.random.words(),
    installationInstructions: faker.random.words(),
    type: faker.random.arrayElement([ProductType.PLUGIN, ProductType.THEME]),
    developer: {
      name: faker.company.companyName()
    },
    version: String(faker.random.float({ precision: 3 })),
    supportUrl: faker.internet.url()
  },
  {
    name: faker.random.word(),
    description: faker.random.words(),
    installationInstructions: faker.random.words(),
    type: faker.random.arrayElement([ProductType.PLUGIN, ProductType.THEME]),
    developer: {
      name: faker.company.companyName()
    },
    version: String(faker.random.float({ precision: 3 })),
    supportUrl: faker.internet.url()
  },
]
