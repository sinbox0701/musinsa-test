import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import {
  deactivateExclusive,
  deactivateSales,
  deactivateSearch,
  deactivateSoldout,
  resetFilter,
  resetResult,
} from '../redux/slices/filterSlice';
import Filterword from './Filterword';

export default function ResultBar() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const onClickReset = () => {
    dispatch(resetFilter());
  };

  const searchClear = () => {
    dispatch(resetResult());
    dispatch(deactivateSearch());
  };

  return (
    <div className="max-w-xl w-96 flex px-1 justify-between items-center text-black text-sm md:max-w-md mt-1">
      <div className="flex space-x-2">
        {filters.result !== '' ? (
          <Filterword>
            <span>{filters.result} </span>
            <span onClick={searchClear}>x</span>
          </Filterword>
        ) : null}
        {filters.sales === true ? (
          <Filterword>
            <span>세일상품 </span>
            <span onClick={() => dispatch(deactivateSales())}>x</span>
          </Filterword>
        ) : null}
        {filters.exclusive === true ? (
          <Filterword>
            <span>단독상품 </span>
            <span onClick={() => dispatch(deactivateExclusive())}>x</span>
          </Filterword>
        ) : null}
        {filters.soldout === true ? (
          <Filterword>
            <span>품절포함 </span>
            <span onClick={() => dispatch(deactivateSoldout())}>x</span>
          </Filterword>
        ) : null}
      </div>
      <div onClick={onClickReset}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </div>
    </div>
  );
}
