import { Portal } from '@radix-ui/react-portal';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { cn } from '@/lib/cn';
import { Hamburger } from '../Hamburger';

type Props = {
  main: React.ReactElement;
  aside?: React.ReactNode;
  hamburgerMenu?: React.ReactNode;
  className?: string;
};

export const MainLayout: React.VFC<Props> = ({
  main,
  aside,
  hamburgerMenu,
  className,
}) => {
  const lg = useBreakPoint('lg');

  return (
    <div className={cn(className, 'grid lg:grid-cols-5 grid-cols-1 gap-10 xs:flex xs:justify-center')}>
      <div className="lg:col-span-4">
        <div className="mr-auto w-full">
          <main>{main}</main>
        </div>
      </div>
        <div className="ml-auto lg:w-auto w-full">
          <aside>{aside}</aside>
        </div>
      {lg || (
        <Portal>
          <div className="z-50 fixed left-8 bottom-8">
            <Hamburger>{hamburgerMenu}</Hamburger>
          </div>
        </Portal>
      )}
    </div>
  );
};
