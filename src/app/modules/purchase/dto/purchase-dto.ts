import { ClientDto } from 'src/app/modules/client/dto/client-dto';
import { ProductPurchasedDto } from 'src/app/modules/product-purchased/dto/product-purchased-dto';
import { ProductDto } from 'src/app/modules/product/dto/product-dto';

export interface PurchaseDto {
  idCarrito?: number;
  date?: Date;
  idUsuario?: ClientDto;
  products?: ProductDto[];
  productsPurchased?: ProductPurchasedDto[];
}
