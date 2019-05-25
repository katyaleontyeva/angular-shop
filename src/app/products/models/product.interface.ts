import { ProductCategory } from '../../shared/enums';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images?: string[];
  isAvailable?: boolean;
}
