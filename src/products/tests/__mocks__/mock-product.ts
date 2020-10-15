import { ProductType } from "../../interfaces/product-type.enum";
import { Product } from "../../schemas/product.schema";

export const mockProductsList: Product[] = [
  {
    name: 'Elementor PRO',
    description: 'Elementor is a awesome plugin',
    installationInstructions: '',
    type: ProductType.PLUGIN,
    developer: {
      name: 'Elementor'
    },
    version: '2.0.0',
    supportUrl: 'https://google.com'
  },
  {
    name: 'WP Rocket',
    description: 'WP Rocket is a awesome plugin for cache',
    installationInstructions: 'You need to uninstall any cache plugin first.',
    type: ProductType.PLUGIN,
    developer: {
      name: 'WP Rocket'
    },
    version: '2.0.0',
    supportUrl: 'https://google.com'
  },
  {
    name: 'Yoast SEO Premium',
    description: 'Yoast SEO Premium is a awesome plugin for SEO',
    installationInstructions: 'You need to uninstall any SEO plugin first.',
    type: ProductType.PLUGIN,
    developer: {
      name: 'Yoast SEO'
    },
    version: '2.0.0',
    supportUrl: 'https://google.com'
  },
]
