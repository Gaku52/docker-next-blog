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
      <a className="justify-center select-none vstack flex-col cursor-pointer rounded-md focus:outline object-cover border-box  zoom-box transition-transform">
      <div className="p-0 sm:p-0 bg-primary-1">
        <div className=" bg-slate-100 sm:bg-transparent overflow-hidden">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="sm:h-full h-full"/>
        </div>
        <div className="m-auto sm:p-3 p-2 sm:h-36 h-44 sm:w-full sm:text-xs border-t-4 border-neutral-300 dark:border-neutral-400 gap-2 vstack">
          <Date date={date} />
          <h3 className="m-auto sm:text-primary-1 sm:text-sm text-sm sm:font-bold font-bold">{title}</h3>
          <p className="m-auto text-neutral-700 dark:text-neutral-300 font-normal sm:text-xs text-xs line-clamp-2 sm:line-clamp-3">
            {excerpt}
          </p>
        </div>
      </div>
      </a>
    </Link>
  );
};