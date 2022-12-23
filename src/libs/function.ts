/**
 * 검색바 활성 유무
 * @param exclusive 단독상품 활성 유무
 * @param sales 세일상품 활성 유무
 * @param soldout 품절포함 활성 유무
 * @param result 검색어 입력 유무
 * @returns true | false
 */
export const checkActivateResult = (
  exclusive: boolean,
  sales: boolean,
  soldout: boolean,
  result: string
) => {
  if (exclusive === false && sales === false && soldout === false && result === '') {
    return false;
  } else {
    return true;
  }
};
