import { RiTimeFill } from 'react-icons/ri';
import { formatDate } from '@/lib/date';

type Props = {
  date: string;
};

export const Date: React.VFC<Props> = ({ date }) => (
  <div className="text-left select-none hstack gap-2 text-md sm:font-medium text-accent-1">
    <RiTimeFill />
    {formatDate(date)}
  </div>
);
