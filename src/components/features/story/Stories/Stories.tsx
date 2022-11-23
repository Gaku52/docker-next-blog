import { PostType } from '@/types/post';
import { Story } from './Story';

type Props = {
  posts: PostType[];
  icon?: React.ReactElement;
  title: React.ReactNode;
};

export const Stories = ({ posts, icon, title }: Props) => {
  return (
    <section>
      <div className="vstack sm:gap-5 gap-5">
        <h2 className="hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight">
          {icon} {title}
        </h2>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-2 dark:text-white sm:gap-3 gap-2">
          {posts.map((post) => (
            <Story
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};