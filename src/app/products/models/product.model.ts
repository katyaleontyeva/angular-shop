import { IProduct } from './product.interface';
import { ProductCategory } from '../../shared/enums';

export class Product implements IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  isAvailable: boolean;
}
