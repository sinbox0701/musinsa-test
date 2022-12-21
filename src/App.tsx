import { useQuery } from 'react-query';
import Goods from './components/Goods';
import Layout from './components/Layout';
import { getGoodsApi } from './libs/api';
import { ItemProps } from './types/interface';

function App() {
  const { data: goodsList } = useQuery(['getGoods'], () =>
    getGoodsApi('https://static.msscdn.net/musinsaUI/homework/data/goods1.json')
  );
  console.log(goodsList?.data.list);
  return (
    <Layout>
      <div className="bg-white grid grid-cols-2">
        {goodsList?.data.list.map((goods: ItemProps) => (
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
      </div>
    </Layout>
  );
}

export default App;
