import { ProductModel } from '../products/models/product.model';
import { ProductCategory } from './enums';

export const productsData: ProductModel[] = [
  {
    id: 1,
    name: 'Monstera deliciosa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, explicabo!',
    price: 15,
    category: ProductCategory.Araceae,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/27/pl2000032789.jpg?width=440&height=440'
    ],
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Spathiphyllum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, in.',
    price: 25,
    category: ProductCategory.Araceae,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/43/pl2000034375.jpg?width=440&height=440'
    ],
    isAvailable: false,
  },
  {
    id: 3,
    name: 'Ficus elastica \'Robusta\'',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eius.',
    price: 20,
    category: ProductCategory.Ficeae,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/02/77/pl2000027700.jpg?width=440&height=440'
    ],
    isAvailable: true,
  },
];
