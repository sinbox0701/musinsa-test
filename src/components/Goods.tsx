import { ItemProps } from '../types/interface';

export default function Goods({
  brandLinkUrl,
  brandName,
  goodsName,
  goodsNo,
  imageUrl,
  isExclusive,
  isSale,
  isSoldOut,
  linkUrl,
  normalPrice,
  price,
  saleRate,
}: ItemProps) {
  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://image.msscdn.net/musinsaUI/homework/data/img.jpg';
  };
  return (
    <div className="px-2 justify-between relative">
      <div className="mb-2">
        <img className="h-56 object-fill" src={imageUrl} alt="no item" onError={onErrorImg} />
      </div>
      {isExclusive ? <div className="">단독</div> : null}
      <div className="space-y-2">
        <div className="text-sm font-normal">{brandName}</div>
        <div className="font-bold">{goodsName}</div>
        <div className="space-y-0">
          <div className="flex flex-row justify-between font-medium">
            <span>{normalPrice}원</span>
            <span className="text-red-500">{saleRate}%</span>
          </div>
          {isSale ? <div></div> : <div>{price}원</div>}
        </div>
      </div>
    </div>
  );
}
