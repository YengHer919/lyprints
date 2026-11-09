import CoffeeSide from '../assets/CoffeeSide.jpeg';
import CoffeeSpiltSide from '../assets/CoffeeSpiltSide.jpeg';
import HexTo from '../assets/HexTo.jpeg';
import OutsideShuriken from '../assets/OutsideShuriken.jpeg';
import SpiralConeSide from '../assets/SpiralConeSide.jpeg';
import SprialConeSideSep from '../assets/SprialConeSideSep.jpeg';
import TopCoffee from '../assets/TopCoffee.jpeg';
import TopShuriken from '../assets/TopShuriken.jpeg';
import TopSpiltCoffee from '../assets/TopSpiltCoffee.jpeg';
import CoffePlay from '../assets/CoffeePlay.mp4';
import ConePlay from '../assets/ConePlay.mp4';
import HexPlay from '../assets/HexPlay.mp4';
import ConePlay2 from '../assets/ConePlay2.mp4';
import HexPlay2 from '../assets/HexPlay2.mp4';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  description: string;
  inStock: boolean;
  features?: string[];
  dimensions?: string;
  material?: string;
  time?: number;
}

/**
 * CATALOG TEMPLATE DATA
 * Edit this array to add, update, or remove products in your catalog gallery.
 * Simply replace the sample values with your own product names, prices, images, and descriptions.
 */
export const initialProducts: Product[] = [
  {
    id: "Coffee",
    name: "Spiral Coffee Mug",
    price: 10.00,
    category: "Fidgets",
    image: CoffeeSpiltSide,
    images: [CoffeeSpiltSide, CoffeeSide, TopSpiltCoffee, TopCoffee, CoffePlay],
    description: "Silly prank spiral coffee cup that spills out its contents when tilted. Then magically refills itself when upright.",
    inStock: true,
    material: "PLA",
    dimensions: "10.5cm x 6cm x 8cm",
    features: [
      "Screw mechanism to hold parts together (on bottom)",
      "High precision 3D printed detail",
      "Durable eco-friendly materials"
    ],
    time: 1
  },
  {
    id: "Shuriken",
    name: "Shuriken",
    price: 5.00,
    category: "Models",
    image: OutsideShuriken,
    images: [OutsideShuriken, TopShuriken],
    description: "A sleek and shuriken model, perfect for fidgeting and display purposes.",
    inStock: true,
    material: "PLA",
    dimensions: "9cm x 9cm x 5mm",
    features: [
      "Sleek minimalist design",
      "Lightweight and portable",
      "Available in multiple colors"
    ],
    time: 2
  },
  {
    id: "Hexagon Fidget",
    name: "Hexagon Fidget",
    price: 5.00,
    category: "Fidgets",
    image: HexTo,
    images: [HexTo, HexPlay, HexPlay2],
    description: "A hexagon-shaped fidget toy, perfect for stress relief and display purposes.",
    inStock: false,
    material: "PLA",
    dimensions: "20cm x 20cm x 25cm",
    features: [
      "Comes with an alt version which includes a control stick",
      "Satifsying design and play",
      "Durable and long-lasting"
    ],
    time: 3
  },
  {
    id: "Cone",
    name: "Cone",
    price: 5.00,
    category: "Fidget",
    image: SpiralConeSide,
    images: [SpiralConeSide, SprialConeSideSep, ConePlay, ConePlay2],
    description: "This is a placeholder description for Sample Product Item 4. Easily update the image URL, price, and category in the template.",
    inStock: true,
    material: "PLA",
    dimensions: "10cm x 10cm x 5cm",
    features: [
      "Ergonomic geometry",
      "Modular components",
      "Fast production time"
    ],
    time: 4
  }
];

export const catalogCategories = ["All", "Alphabetical", "Recent", "Fidgets", "Models"];
