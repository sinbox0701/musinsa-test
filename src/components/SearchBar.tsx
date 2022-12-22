export default function SearchBar() {
  return (
    <div className="flex justify-center w-80">
      <input
        type="search"
        className="form-control block w-full mx-0 px-1 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="상품명 검색"
      />
    </div>
  );
}
