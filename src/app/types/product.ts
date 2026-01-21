
// types/product.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

export interface ProductCardProps {
  product: Product;
  onGetQuote: () => void;
}

export interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  loadModel: (id: number) => void;
  load : boolean;
}
