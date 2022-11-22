import { Image } from '@/components/common/Image';
import markdownStyles from './styles/markdown-styles.module.css';

type Props = {
  content: string;
  postImage: string;
};

export const PostBody = ({ content, postImage }: Props) => {
  return (
    <div className="post">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Image
      src={postImage}
      alt={`postImage`}
      className="w-full h-full object-cover rounded-lg border-2 border-neutral-300"
      />
    </div>
  );
};
