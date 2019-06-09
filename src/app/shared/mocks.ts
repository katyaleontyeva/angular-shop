import { ProductModel } from '../products/models/product.model';
import { ProductCategory } from './enums';

export const productsData: ProductModel[] = [
  {
    id: 1,
    name: 'Monstera deliciosa',
    description: '14cm pot - 50cm tall',
    details: `<p><b>Home care:</b> Keep it out of direct sunlight, ideally it likes a bright spot, and mist the leaves, particularly if the room is warm and dry. Also the leaves will appreciate being given a wash sometimes to keep them clean and dust free. This plant likes a moist soil but not a waterlogged soil, so in the winter feel the soil before you water it. In the summer you can water more freely.</p><p>Harmful if eaten/skin & eye irritant</p>`,
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
    details: `<p><b>Home care:</b> Keep the compost moist to touch but do not overwater. Mist the leaves regularly, and clean them with a damp cloth to prevent a build up of dust. Keep away from cold draughts or direct sunlight.</p><p>Harmful if eaten/skin & eye irritant</p>`,
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
    details: `<p><b>Home care:</b> These are easy plants to care for as long as you are careful with the watering. Only water once the compost is dry to touch, and make sure that the plant isn't left standing in water. You can mist the leaves during the summer to increase the humidity. Occasionally wash the leaves with a damp sponge or cloth to keep the foliage glossy. Try to maintain an average temperature no lower than 12°C in the winter, and avoid any sudden drops in the temperature and cold draughts.</p>`,
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
    details: `<p><b>Home care:</b> Avoid over-watering by allowing the top of the compost to get dry before watering again. Water less in winter. Mist the leaves with water regularly and maintain temperatures above 15°C. Repot every few years in spring.</p>`,
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
    details: `<p><b>Home care:</b> Make sure that it is in a bright spot but not in direct  sun, with a constant average temperature no lower than 10°C in the winter.  Watering is simple, -water well in the growing season from spring to  autumn, then reduce watering in the winter when the plant's growth has slowed  down. You can mist the leaves occasionally in a hot summer.</p>`,
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
    details: `<p><b>Home care:</b> Place it in a bright spot and in spring and summer, water when the compost gets dry, but make sure it never  sits in excess water for any length of time. In autumn and winter cut back on  the watering but do not let it dry out completely. Avoid a humid atmosphere (no bathrooms or  steamy kitchens) and in the warmer months, open a window or door occasionally so it can enjoy the fresh air. Repot every year or two into a  slightly larger pot using cacti compost.</p>`,
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
    details: `<p><b>Home care:</b> Water regularly in the growing season - less in winter and in areas of low humidity, mist the leaves with water on a regular basis, or place the pot on pebbles in a tray filled with water. Maintain temperatures above 10°C in winter and avoid summer temperatures above 25°C. Repot in spring when the plant becomes root-bound.</p>`,
    price: 19.99,
    category: ProductCategory.Succulent,
    images: [
      'https://img.crocdn.co.uk/images/products2/pl/20/00/03/44/pl2000034438.jpg?width=440&height=440'
    ],
    isAvailable: true,
  }
];
