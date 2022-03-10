export type Brand = {
  _id: string;
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

export type GetBrandsQuery = {
  latStart: number;
  lngStart: number;
  latEnd: number;
  lngEnd: number;
};
