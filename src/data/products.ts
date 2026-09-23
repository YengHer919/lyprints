export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
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
    id: "sample-item-1",
    name: "Sample Product Item 1",
    price: 49.99,
    category: "Fidgets",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder description for Sample Product Item 1. Edit src/data/products.ts to replace this text with your own product description.",
    inStock: true,
    material: "PLA / PETG",
    dimensions: "15cm x 10cm x 12cm",
    features: [
      "Custom handcrafted finish",
      "High precision 3D printed detail",
      "Durable eco-friendly materials"
    ],
    time: 1
  },
  {
    id: "sample-item-2",
    name: "Sample Product Item 2",
    price: 29.50,
    category: "Fidgets",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder description for Sample Product Item 2. Add your custom features and product specifications in src/data/products.ts.",
    inStock: true,
    material: "Aluminium / Polymer",
    dimensions: "8cm x 5cm x 3cm",
    features: [
      "Sleek minimalist design",
      "Lightweight and portable",
      "Available in multiple colors"
    ],
    time: 2
  },
  {
    id: "sample-item-3",
    name: "Sample Product Item 3",
    price: 75.00,
    category: "Models",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder description for Sample Product Item 3. Perfect for custom 3D model commissions and bespoke art pieces.",
    inStock: false,
    material: "Resin Art",
    dimensions: "20cm x 20cm x 25cm",
    features: [
      "Made to order",
      "Hand-painted accents",
      "Custom engraving available"
    ],
    time: 3
  },
  {
    id: "sample-item-4",
    name: "Sample Product Item 4",
    price: 19.99,
    category: "Models",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder description for Sample Product Item 4. Easily update the image URL, price, and category in the template.",
    inStock: true,
    material: "Polycarbonate",
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
