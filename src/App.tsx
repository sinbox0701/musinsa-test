import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import Goods from './components/Goods';
import Layout from './components/Layout';
import { useAppSelector } from './redux/app/hooks';
import { GoodsType } from './types/interface';

function App() {
  const filters = useAppSelector((state) => state.filters);
  const [goodsList, setGoodsList] = useState<GoodsType[]>([]);
  const [hasData, setHasData] = useState<boolean>(true);
  const page = useRef<number>(0);
  const observerTargetEl = useRef<HTMLDivElement>(null);

  const fetch = useCallback(async () => {
    const { data } = await axios.get(
      `https://static.msscdn.net/musinsaUI/homework/data/goods${page.current}.json`
    );
    if (data) {
      setGoodsList((prev) => [...prev, ...data.data.list]);
      page.current += 1;
    } else {
      setHasData(false);
    }
  }, []);

  useEffect(() => {
    if (!observerTargetEl.current || !hasData) return;

    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetch();
      }
    });
    observer.observe(observerTargetEl.current);

    return () => {
      observer.disconnect();
    };
  }, [fetch, hasData]);

  return (
    <Layout>
      <div className="bg-white grid grid-cols-2">
        {goodsList.map((goods) => (
          <Goods
            key={goods.goodsNo}
            brandLinkUrl={goods.brandLinkUrl}
            brandName={goods.brandName}
            goodsName={goods.goodsName}
            goodsNo={goods.goodsNo}
            imageUrl={goods.imageUrl}
            isExclusive={goods.isExclusive}
            isSale={goods.isSale}
            isSoldOut={goods.isSoldOut}
            linkUrl={goods.linkUrl}
            normalPrice={goods.normalPrice}
            price={goods.price}
            saleRate={goods.saleRate}
          />
        ))}
        <div ref={observerTargetEl} />
      </div>
    </Layout>
  );
}

export default App;
