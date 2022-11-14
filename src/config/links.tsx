import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiTag } from 'react-icons/fi';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
  { name: 'タグ', href: '/tags', icon: <FiTag /> },
  { name: '詳細プロフィール', href: '/about', icon: <AiOutlineInfoCircle /> },
];
