export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  features: string[];
  specifications?: {
    [key: string]: string;
  };
}

export interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}