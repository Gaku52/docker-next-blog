import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiTag } from 'react-icons/fi';
import { RiChatNewLine } from 'react-icons/ri';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
  { name: '記事一覧', href: '/posts/page/1', icon: <RiChatNewLine /> },
  { name: 'タグ', href: '/tags', icon: <FiTag /> },
  { name: '詳細プロフィール', href: '/about', icon: <AiOutlineInfoCircle /> },
];
