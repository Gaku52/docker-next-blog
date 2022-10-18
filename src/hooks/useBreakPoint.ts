import { useWindowSize } from './useWindowSize';

type Bp = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const bps = {
  xs: 576,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1400,
};

export const useBreakPoint = (bp: Bp) => {
  const { width } = useWindowSize();
  return width >= bps[bp];
};
