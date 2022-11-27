import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  LineIcon,
  LineShareButton,
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { MdShare } from 'react-icons/md';
import { ROOT_URL, SITE_NAME } from '@/config/app';
import { PostType } from '@/types/post';

type Props = {
  post: PostType;
};

const SIZE = 28;

export const Share: React.VFC<Props> = ({ post }) => {
  const { title, slug
    , ogImage
        } = post;

  const url = `${ROOT_URL}/posts/${slug}`;
  const config = { title, url };

  const tags = post.tags.map((tag) => tag.split(' ')[0]);

  return (
    <div className="select-none vstack gap-3 p-10 bg-primary-2">
      <div className="center gap-2 py-2 px-3 text-lg font-bold text-primary-1 uppercase">
        <MdShare />
        シェアする
      </div>

      <div className="w-full center gap-10">
        <PinterestShareButton {...config} 
          media={ogImage.url}
          className="hover-box"
        >
          <PinterestIcon size={SIZE} round />
        </PinterestShareButton>
        <TwitterShareButton
          title={title}
          url={url}
          via={SITE_NAME}
          related={[SITE_NAME, 'Next.js']}
          hashtags={tags}
          className="hover-box"
        >
          <TwitterIcon size={SIZE} round />
        </TwitterShareButton>
        <FacebookShareButton {...config}
          className="hover-box">
          <FacebookIcon size={SIZE} round />
        </FacebookShareButton>
        <LineShareButton {...config}
          className="hover-box">
          <LineIcon size={SIZE} round />
        </LineShareButton>
        <HatenaShareButton {...config}
          className="hover-box"
        >
          <HatenaIcon size={SIZE} round />
        </HatenaShareButton>
      </div>
    </div>
  );
};
