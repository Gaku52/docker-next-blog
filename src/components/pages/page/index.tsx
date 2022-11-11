import { useRouter } from 'next/router';
import { RiChatNewLine } from 'react-icons/ri';
import { Pagination } from '@/components/features/story/Pagination';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
  maxPage: number;
};

export const Page: React.VFC<Props> = ({ posts, maxPage }) => {
  const page = Number(useRouter().query.page);

  return (
        <div className="vstack gap-32 p-8 bg-primary-2">
          <Stories posts={posts} title="記事一覧" icon={<RiChatNewLine />} />
          <Pagination count={maxPage} page={page} />
        </div>
  );
};
