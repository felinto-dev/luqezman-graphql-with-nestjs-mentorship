import { Product } from "../../models/product.model";

export const mockProductsList: Product[] = [
  {
    name: 'Elementor PRO',
    description: 'Elementor is a awesome plugin',
    installation_instructions: '',
    product_type: 'plugin',
    developer: {
      name: 'Elementor'
    }
  },
  {
    name: 'WP Rocket',
    description: 'WP Rocket is a awesome plugin for cache',
    installation_instructions: 'You need to uninstall any cache plugin first.',
    product_type: 'plugin',
    developer: {
      name: 'WP Rocket'
    }
  },
  {
    name: 'Yoast SEO Premium',
    description: 'Yoast SEO Premium is a awesome plugin for SEO',
    installation_instructions: 'You need to uninstall any SEO plugin first.',
    product_type: 'plugin',
    developer: {
      name: 'Yoast SEO'
    }
  },
]
