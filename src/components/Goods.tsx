import { GoodsProps } from '../types/interface';

export default function Goods({
  brandLinkUrl,
  brandName,
  goodsName,
  imageUrl,
  isExclusive,
  isSale,
  isSoldOut,
  linkUrl,
  normalPrice,
  price,
  saleRate,
}: GoodsProps) {
  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://image.msscdn.net/musinsaUI/homework/data/img.jpg';
  };

  return (
    <div className="px-2 justify-between mb-2" onClick={() => window.open(linkUrl, '_self')}>
      <div className="mb-4 relative">
        {isSoldOut ? (
          <div className="bg-white opacity-80 text-[#777777] text-center py-24 absolute inset-0">
            SOLD OUT
          </div>
        ) : null}
        <img
          className="h-56 w-full object-center"
          src={imageUrl}
          alt="goods"
          onError={onErrorImg}
        />
        {isExclusive ? (
          <div className="absolute bottom-[-0.6rem] left-1 bg-[#18A286] text-white px-2 py-1 text-xs">
            단독
          </div>
        ) : null}
      </div>
      <div className="space-y-2">
        <div className="text-sm font-normal">
          <a href={brandLinkUrl}>{brandName}</a>
        </div>
        <div className="font-bold whitespace-nomal overflow-hidden text-ellipsis leading-6 h-12">
          {goodsName}
        </div>
        {isSale ? (
          <div className="space-y-0">
            <div className="flex flex-row justify-between font-medium">
              <span>{price}원</span>
              <span className="text-red-500">{saleRate}%</span>
            </div>
            <div className="line-through text-gray-400 text-xs">{normalPrice}원</div>
          </div>
        ) : (
          <div>{normalPrice}원</div>
        )}
      </div>
    </div>
  );
}
