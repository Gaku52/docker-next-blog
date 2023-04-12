import { RiChatNewLine } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { TopProfile } from '@/components/features/app/TopProfile';
import { TopShare } from '@/components/features/app/TopShare';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div className="vstack sm:gap-5 gap-5 p-5 bg-primary-2">
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
            slug: "''",
            title: "''",
            date: "''",
            coverImage: "''",
            excerpt: "''",
            ogImage: {
              url: "''"
            },
            content: "''",
            tags: [""]
            }} /><br />
          <br />
            <TopProfile />
          </>
            }
    />
  );
};
