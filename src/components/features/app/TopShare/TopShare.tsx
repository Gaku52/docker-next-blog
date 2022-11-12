import {
  FacebookIcon,
  FacebookShareButton,
  // PinterestIcon,
  // PinterestShareButton,
  LineIcon,
  LineShareButton,
  // HatenaIcon,
  // HatenaShareButton,
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

export const TopShare: React.VFC<Props> = ({ post }) => {
  const { title, slug
    // , ogImage
        } = post;

  const url = `${ROOT_URL}${slug}`;
  const config = { title, url };

  const tags = post.tags.map((tag) => tag.split(' ')[0]);

  return (
    <div className="select-none vstack gap-3 p-6 bg-primary-2">
      <div className="center gap-2 py-2 px-3 text-lg font-bold text-primary-1 uppercase">
        <MdShare />
        share
      </div>

      <div className="w-full center gap-4">
        {/* <PinterestShareButton {...config} media={ogImage.url}>
          <PinterestIcon size={SIZE} round />
        </PinterestShareButton> */}
        <TwitterShareButton
          title={title}
          url={url}
          via={SITE_NAME}
          related={[SITE_NAME, 'Next.js']}
          hashtags={tags}
        >
          <TwitterIcon size={SIZE} round />
        </TwitterShareButton>
        <FacebookShareButton {...config}>
          <FacebookIcon size={SIZE} round />
        </FacebookShareButton>
        <LineShareButton
          title={title}
          url={url}
        >
          <LineIcon size={SIZE} round />
        </LineShareButton>
        {/* <HatenaShareButton {...config}>
          <HatenaIcon size={SIZE} round />
        </HatenaShareButton> */}
      </div>
    </div>
  );
};
