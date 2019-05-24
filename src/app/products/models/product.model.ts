import { IProduct } from './product.interface';
import { ProductCategory } from '../../shared/enums';

export class ProductModel implements IProduct {
  constructor(
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public category: ProductCategory,
    public image: string = '',
    public isAvailable: boolean
  ) { }
}
