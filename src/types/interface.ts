export interface GoodsProps extends GoodsType {}

export interface GoodsType {
  brandLinkUrl: string;
  brandName: string;
  goodsName: string;
  goodsNo?: string;
  imageUrl: string;
  isExclusive: boolean;
  isSale: boolean;
  isSoldOut: boolean;
  linkUrl: string;
  normalPrice: number;
  price: number;
  saleRate: number;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface FilterWordProps {
  children: React.ReactNode;
}
