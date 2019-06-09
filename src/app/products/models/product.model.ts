import { IProduct } from './product.interface';
import { ProductCategory } from '../../shared/enums';

export class ProductModel implements IProduct {
  constructor(
    public id: number = null,
    public name: string = '',
    public description: string = '',
    public details: string = '',
    public price: number = null,
    public category: ProductCategory = null,
    public images?: string[],
    public isAvailable?: boolean
  ) {
      this.images = images || ['http://via.placeholder.com/400x400'];
      this.isAvailable = isAvailable || false;
  }
}
