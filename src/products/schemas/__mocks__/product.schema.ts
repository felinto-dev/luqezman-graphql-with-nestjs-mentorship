import * as faker from 'faker'

import { ProductType } from "../../types/product-type.enum";
import { Product } from "../product.schema";

export const mockProduct: Product = {
  name: faker.random.word(),
  description: faker.random.words(),
  type: faker.random.arrayElement(Object.values(ProductType)),
  developer: {
    name: faker.company.companyName()
  },
  version: faker.system.semver(),
  supportUrl: faker.internet.url()
}

export const mockProductsList: Product[] = [mockProduct]
