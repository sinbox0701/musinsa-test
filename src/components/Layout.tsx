import { useAppSelector } from '../redux/app/hooks';
import { LayoutProps } from '../types/interface';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  const filters = useAppSelector((state) => state.filters);
  return (
    <div className="bg-gray-400 flex flex-col justify-center items-center">
      <Header />
      <div className={`${filters.search ? 'mt-[12rem]' : 'mt-28'}`}>{children}</div>
    </div>
  );
}
