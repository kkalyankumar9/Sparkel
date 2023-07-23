export interface ProductObj {
  ratings: number;
  reviews: string;
  image: string;
  brand: string;
  title: string;
  size: string;
  discountprice: number;
  price: number;
  discountPercentage: string;
  id: number;
  isNew: boolean;
  assured: boolean;
  gender: string;
}

export interface ProductState {
  productArr: ProductObj[];
  isError: boolean;
  isLoading: boolean;
  totalResult: number;
  isAdminAuth: boolean;
}
