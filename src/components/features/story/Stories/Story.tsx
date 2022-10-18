import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const Story = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className="justify-center select-none w-auto h-full vstack sm:flex-row cursor-pointer border-2 rounded-md p-2 focus:outline object-cover">
        <div className="m-auto center sm:h-full bg-neutral-50 sm:bg-transparent">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="sm:h-40 rounded-md"
          />
        </div>
        <div className="m-auto w-full sm:w-2/3 h-40 sm:h-40 p-3 sm:p-6 vstack gap-2 bg-primary-1">
          <Date date={date} />
          <h3 className="m-auto sm:text-primary-1 sm:text-xl font-medium">{title}</h3>
          <p className="m-auto text-neutral-700 dark:text-neutral-300 font-normal text-sm line-clamp-2 sm:line-clamp-3">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};