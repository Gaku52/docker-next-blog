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
      <a className="justify-center select-none overflow-hidden w-full h-full vstack sm:flex-row cursor-pointer p-2 focus:outline- ">
        <div className="m-auto center w-auto h-48 sm:w-1/3 sm:h-full bg-neutral-50 sm:bg-transparent">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="w-auto h-full object-cover sm:w-auto sm:h-40"
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
