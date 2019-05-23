import { ProductCategory } from '../../shared/enums';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  isAvailable: boolean;
}
