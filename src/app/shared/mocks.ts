import { ProductModel } from '../products/models/product.model';
import { ProductCategory } from './enums';

export const productsData: ProductModel[] = [
  {
    name: 'Монстера',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, explicabo!',
    price: 15,
    category: ProductCategory.Araceae,
    image: 'http://cdn.shopify.com/s/files/1/0150/6262/articles/kara-eads-547179-unsplash_480x.jpg?v=1547149919',
    isAvailable: true,
  },
  {
    name: 'Спатифиллум',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, in.',
    price: 25,
    category: ProductCategory.Araceae,
    image: 'http://proklumbu.com/wp-content/uploads/2016/12/106521414_large_50.jpg',
    isAvailable: false,
  },
  {
    name: 'Фикус каучуконосный',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eius.',
    price: 20,
    category: ProductCategory.Ficeae,
    image: 'http://img.crocdn.co.uk/images/products2/pl/20/00/03/05/pl2000030537.jpg?width=940&height=940',
    isAvailable: true,
  },
];
