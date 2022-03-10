export type BrandType = {
  name: string;
  description: string;
  address: string;
  minimumPurchaseAmount: number;
  tags: string[];
  products: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
};
