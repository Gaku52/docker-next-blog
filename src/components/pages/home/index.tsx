import { RiChatNewLine } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { TopShare } from '@/components/features/app/TopShere';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div className="vstack sm:gap-12 gap-36 p-8 bg-primary-2">
          <Stories posts={posts} title="NEW" icon={<RiChatNewLine />} />
          <Link href="/posts/page/1" passHref>
            <a className="button">
              記事一覧へ
            </a>
          </Link>
        </div>
      }
      aside={
          <>
            <TopShare post=
            {{
            slug: '',
            title: '',
            date: '',
            coverImage: '',
            excerpt: '',
            ogImage: {
              url: ''
            },
            content: '',
            tags: []
            }} /><br />
          <br />
            <Profile />
          </>
            }
    />
  );
};
