import { FilterWordProps } from '../types/interface';

export default function Filterword({ children }: FilterWordProps) {
  return <div className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">{children}</div>;
}
