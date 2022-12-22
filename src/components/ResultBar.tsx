import { useAppSelector } from '../redux/app/hooks';

export default function ResultBar() {
  const filters = useAppSelector((state) => state.filters);
  return (
    <div className="flex justify-between items-start w-96">
      <div>{filters.result}</div>
      <div>{filters.result}</div>
      <div>{filters.result}</div>
      <div>{filters.result}</div>
    </div>
  );
}
