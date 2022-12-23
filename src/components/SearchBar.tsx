import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { makeWord } from '../redux/slices/filterSlice';
// import { makeWord, search } from '../redux/slices/filterSlice';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const [word, setWord] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);

  const autoResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    if (e.target.value) {
      setResults(
        filters.keywords.filter((keyword) =>
          keyword.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center w-80 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          placeholder="상품명 검색"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              dispatch(makeWord({ keyword: word }));
            }
          }}
          onChange={(e) => autoResult(e)}
        />
      </div>

      {results.length > 0 ? (
        <div className="mt-1 flex flex-col items-start space-y-1 w-80">
          {results.map((result) => (
            <div
              className="bg-blue-500 text-xs font-thin text-white p-1 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis w-48"
              onClick={() => dispatch(makeWord({ keyword: result }))}
            >
              {result}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
