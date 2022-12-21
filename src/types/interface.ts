export interface GoodsProps {
  brandLinkUrl: string;
  brandName: string;
  goodsName: string;
  goodsNo: string;
  imageUrl: string;
  isExclusive: boolean;
  isSale: boolean;
  isSoldOut: boolean;
  linkUrl: string;
  normalPrice: number;
  price: number;
  saleRate: number;
}

export interface GoodsType extends GoodsProps {}

export interface LayoutProps {
  children: React.ReactNode;
}
