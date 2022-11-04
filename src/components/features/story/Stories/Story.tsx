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
      <a className="justify-center select-none w-auto h-full vstack sm:flex-row flex-row cursor-pointer rounded-md p-1 focus:outline object-cover bg-neutral-300 gap-1">
        <div className="m-auto center sm:h-full bg-slate-100 sm:bg-transparent">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="sm:h-40 sm:w-64"
          />
        </div>
        <div className="m-auto sm:w-2/3 w-full  h-40 sm:h-40 p-3 sm:p-3 vstack gap-2 bg-primary-1">
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