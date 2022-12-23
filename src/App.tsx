import axios, { AxiosError } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Goods from './components/Goods';
import Layout from './components/Layout';
import { useAppSelector } from './redux/app/hooks';
import { recordKeywords } from './redux/slices/filterSlice';
import { GoodsType } from './types/interface';

function App() {
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [goodsList, setGoodsList] = useState<GoodsType[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [hasData, setHasData] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const isExclusive = useRef<boolean>(false);
  const isSale = useRef<boolean>(false);
  const isSoldout = useRef<boolean>(false);
  const result = useRef<string>('');

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://static.msscdn.net/musinsaUI/homework/data/goods${page}.json`
      );
      if (data) {
        setGoodsList((prev) => [...prev, ...data.data.list]);
        setKeywords((prev) => [
          ...prev,
          ...data.data.list.map((data: GoodsType) => data.goodsName),
        ]);
        if (isExclusive.current) {
          setGoodsList((prev) => prev.filter((goods) => goods.isExclusive === true));
        }
        if (isSale.current) {
          setGoodsList((prev) => prev.filter((goods) => goods.isSale === true));
        }
        if (!isSoldout.current) {
          setGoodsList((prev) => prev.filter((goods) => goods.isSoldOut === false));
        }
        if (result.current !== '') {
          setGoodsList((prev) =>
            prev.filter((goods) =>
              goods.goodsName.toLowerCase().includes(result.current.toLowerCase())
            )
          );
        }
        setPage((prev) => prev + 1);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        setHasData(false);
      } else {
        console.log(String(e));
      }
    }
  }, [page]);

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
    if (filters.exclusive) {
      isExclusive.current = true;
    } else {
      isExclusive.current = false;
    }
    if (filters.sales) {
      isSale.current = true;
    } else {
      isSale.current = false;
    }
    if (filters.soldout) {
      isSoldout.current = true;
    } else {
      isSoldout.current = false;
    }
    if (filters.result !== '') {
      result.current = filters.result;
    } else {
      result.current = '';
    }
    setGoodsList([]);
    setHasData(true);
    setPage(0);
  }, [filters.exclusive, filters.result, filters.sales, filters.search, filters.soldout]);

  useEffect(() => {
    let setKeywords = new Set(keywords);
    dispatch(recordKeywords({ keywords: Array.from(setKeywords.values()) }));
  }, [dispatch, keywords]);

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
