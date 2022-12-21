import { useState } from 'react';
import { useAppDispatch } from '../redux/app/hooks';
import {
  changeExclusive,
  changeSales,
  changeSearch,
  changeSoldout,
} from '../redux/slices/filterSlice';

export default function Header() {
  const dispatch = useAppDispatch();
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const [toggleSales, setToggleSales] = useState<boolean>(false);
  const [toggleExclusive, setToggleExclusive] = useState<boolean>(false);
  const [toggleSoldout, setToggleSoldout] = useState<boolean>(false);

  return (
    <div className="bg-white w-full py-2 fixed border-b top-0 flex flex-col items-center justify-center z-10">
      <div className="text-lg text-black font-medium mt-1 mb-2">MUSINSA</div>
      <div className="max-w-xl w-full flex px-1 justify-start items-center text-black text-sm md:max-w-md">
        <div
          className={`border rounded-full flex items-center px-4 py-2 mr-1 ${
            toggleSearch ? ' text-white bg-blue-500' : ''
          }`}
          onClick={() => {
            setToggleSearch((prev) => !prev);
            dispatch(changeSearch());
          }}
        >
          <div>검색</div>
          <svg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </div>
        <div
          className={`border rounded-full flex items-center px-4 py-2 mr-1 ${
            toggleSales ? ' text-white bg-blue-500' : ''
          }`}
          onClick={() => {
            setToggleSales((prev) => !prev);
            dispatch(changeSales());
          }}
        >
          <span>세일상품</span>
        </div>
        <div
          className={`border rounded-full flex items-center px-4 py-2 mr-1 ${
            toggleExclusive ? ' text-white bg-blue-500' : ''
          }`}
          onClick={() => {
            setToggleExclusive((prev) => !prev);
            dispatch(changeExclusive());
          }}
        >
          <span>단독상품</span>
        </div>
        <div
          className={`border rounded-full flex items-center px-4 py-2 mr-1 ${
            toggleSoldout ? ' text-white bg-blue-500' : ''
          }`}
          onClick={() => {
            setToggleSoldout((prev) => !prev);
            dispatch(changeSoldout());
          }}
        >
          <span>품절포함</span>
        </div>
      </div>
    </div>
  );
}
