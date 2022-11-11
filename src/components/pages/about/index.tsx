import { DetailedProfile } from '@/components/features/app/DetailedProfile';
import { MainLayout } from '@/components/features/app/Layout';

export const About = () => (
  <MainLayout className="flex justify-center md:block" main={<DetailedProfile />} />
);
