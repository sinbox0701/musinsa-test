import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white flex justify-center">
      <Header />
      <div>{children}</div>
    </div>
  );
}
