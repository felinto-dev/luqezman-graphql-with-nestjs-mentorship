import { Product } from "../../schemas/product.schema";

export const mockProductsList: Product[] = [
  {
    name: 'Elementor PRO',
    description: 'Elementor is a awesome plugin',
    installation_instructions: '',
    type: 'plugin',
    developer: {
      name: 'Elementor'
    },
    version: '2.0.0',
    supportUrl: 'https://google.com'
  },
  {
    name: 'WP Rocket',
    description: 'WP Rocket is a awesome plugin for cache',
    installation_instructions: 'You need to uninstall any cache plugin first.',
    type: 'plugin',
    developer: {
      name: 'WP Rocket'
    },
    version: '2.0.0',
    supportUrl: 'https://google.com'
  },
  {
    name: 'Yoast SEO Premium',
    description: 'Yoast SEO Premium is a awesome plugin for SEO',
    installation_instructions: 'You need to uninstall any SEO plugin first.',
    type: 'plugin',
    developer: {
      name: 'Yoast SEO'
    },
    version: '2.0.0',
    supportUrl: 'https://google.com'
  },
]
