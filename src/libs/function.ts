/**
 * 검색바 활성 유무
 * @param isExclusive 단독상품 활성 유무
 * @param isSales 세일상품 활성 유무
 * @param isSoldout 품절포함 활성 유무
 * @param result 검색어 입력 유무
 * @returns true | false
 */
export const checkActivateResult = (
  isExclusive: boolean,
  isSales: boolean,
  isSoldout: boolean,
  result: string
) => {
  if (isExclusive === false && isSales === false && isSoldout === false && result === '') {
    return false;
  } else {
    return true;
  }
};
