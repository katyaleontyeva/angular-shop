import { IProduct } from './product.interface';
import { ProductCategory } from '../../shared/enums';

export class ProductModel implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public images?: string[],
    public isAvailable?: boolean
  ) {
      this.id = id || null;
      this.name = name || '';
      this.description = description || '';
      this.price = price || null;
      this.category = category || null;
      this.images = images || ['http://via.placeholder.com/400x400'];
      this.isAvailable = isAvailable || false;
  }
}
