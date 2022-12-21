import { LayoutProps } from '../types/interface';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-400 flex flex-col justify-center items-center">
      <Header />
      <div className="mt-28">{children}</div>
    </div>
  );
}
