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
      <a className="justify-center select-none vstack sm:flex-col flex-col cursor-pointer rounded-md p-1 focus:outline object-cover bg-neutral-300 gap-1">
        <div className="m-auto center sm:h-full bg-slate-100 sm:bg-transparent">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="sm:h-full sm:w-auto"
          />
        </div>
        <div className="m-auto sm:h-full w-full h-full p-3 sm:p-3 vstack gap-2 sm:text-xs overflow-hidden bg-primary-1">
          <Date date={date} />
          <h3 className="m-auto sm:text-primary-1 sm:text-sm text-sm sm:font-bold font-bold">{title}</h3>
          <p className="m-auto text-neutral-700 dark:text-neutral-300 font-normal sm:text-xs text-xs line-clamp-2 sm:line-clamp-3">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};