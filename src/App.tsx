import axios, { AxiosError } from 'axios';
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
  const isExclusive = useRef<boolean>(false);
  const isSale = useRef<boolean>(false);
  const isSoldout = useRef<boolean>(false);

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://static.msscdn.net/musinsaUI/homework/data/goods${page.current}.json`
      );
      if (data) {
        setGoodsList((prev) => [...prev, ...data.data.list]);
        if (isExclusive.current) {
          setGoodsList((prev) => prev.filter((goods) => goods.isExclusive === true));
        }
        if (isSale.current) {
          setGoodsList((prev) => prev.filter((goods) => goods.isSale === true));
        }
        if (!isSoldout.current) {
          setGoodsList((prev) => prev.filter((goods) => goods.isSoldOut === false));
        }
        page.current += 1;
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        setHasData(false);
      } else {
        console.log(String(e));
      }
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

  useEffect(() => {
    setGoodsList([]);
    if (filters.exclusive) {
      isExclusive.current = true;
    } else {
      isExclusive.current = false;
    }
    setHasData(true);
    page.current = 0;
  }, [filters.exclusive]);

  useEffect(() => {
    setGoodsList([]);
    if (filters.sales) {
      isSale.current = true;
    } else {
      isSale.current = false;
    }
    setHasData(true);
    page.current = 0;
  }, [filters.sales]);

  useEffect(() => {
    setGoodsList([]);
    if (filters.soldout) {
      isSoldout.current = true;
    } else {
      isSoldout.current = false;
    }
    setHasData(true);
    page.current = 0;
    console.log(isExclusive.current);
    console.log(page.current);
  }, [filters.soldout]);
  return (
    <Layout>
      <div className="bg-white grid grid-cols-2">
        {goodsList.map((goods, index) => (
          <Goods
            key={index}
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
