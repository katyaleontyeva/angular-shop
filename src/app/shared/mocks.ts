import { ProductModel } from '../products/models/product.model';
import { ProductCategory } from './enums';

export const productsData: ProductModel[] = [
  {
    id: 1,
    name: 'Monstera deliciosa',
    description: '14cm pot - 50cm tall',
    price: 14.99,
    category: ProductCategory.Foliage,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/27/pl2000032789.jpg?width=440&height=440'
    ],
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Spathiphyllum \'Bingo Cupido\'',
    description: '17cm pot - 65cm tall',
    price: 24.99,
    category: ProductCategory.Flowering,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/43/pl2000034375.jpg?width=440&height=440'
    ],
    isAvailable: false,
  },
  {
    id: 3,
    name: 'Ficus elastica \'Robusta\'',
    description: '17cm pot - 55cm tall',
    price: 12.99,
    category: ProductCategory.Foliage,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/02/77/pl2000027700.jpg?width=640&height=640'
    ],
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Zamioculcas zamiifolia',
    description: '14cm pot - 40cm tall',
    price: 14.99,
    category: ProductCategory.Foliage,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/20/pl2000032091.jpg?width=440&height=440'
    ],
    isAvailable: true,
  },
  {
    id: 5,
    name: 'Tradescantia spathacea \'Sitara\'',
    description: '12cm pot - 25cm tall',
    price: 9.99,
    category: ProductCategory.Foliage,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/20/pl2000032038.jpg?width=440&height=440'
    ],
    isAvailable: true,
  },
  {
    id: 6,
    name: 'Aloe aristata',
    description: '13cm pot - 22cm tall',
    price: 14.99,
    category: ProductCategory.Succulent,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/44/pl2000034476.jpg?width=440&height=440'
    ],
    isAvailable: true,
  },
  {
    id: 7,
    name: 'Aloe and Haworthia collection',
    description: '6 × 6cm pots',
    price: 19.99,
    category: ProductCategory.Succulent,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/44/pl2000034438.jpg?width=440&height=440'
    ],
    isAvailable: true,
  }
];
