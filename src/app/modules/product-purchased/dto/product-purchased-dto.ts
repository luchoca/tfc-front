import { ProductDto } from "src/app/modules/product/dto/product-dto";

export interface ProductPurchasedDto{
  quantity: number,
  product: ProductDto
}
