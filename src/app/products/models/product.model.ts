import { IProduct } from './product.interface';
import { ProductCategory } from '../../shared/enums';

export class ProductModel implements IProduct {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public category: ProductCategory;
    public images?: string[];
    public isAvailable?: boolean;

  constructor(product) {
      this.id = product.id || null;
      this.name = product.name || '';
      this.description = product.description || '';
      this.price = product.price || null;
      this.category = product.category || null;
      this.images = product.images || ['http://via.placeholder.com/400x400'];
      this.isAvailable = product.isAvailable || false;
  }
}
