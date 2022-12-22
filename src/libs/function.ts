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
