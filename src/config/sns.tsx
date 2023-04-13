import { RiAdminFill } from 'react-icons/ri';
import { SiGithub, SiTwitter, SiZenn } from 'react-icons/si';

export const sns = [
  {
    href: 'https://zenn.dev/gaku1234',
    icon: <SiZenn size={20} />,
    label: 'Zenn',
  },
  {
    href: 'https://github.com/Gaku52',
    icon: <SiGithub size={20} />,
    label: 'Github',
  },
  {
    href: 'https://twitter.com/Gk_Egr32',
    icon: <SiTwitter size={20} />,
    label: 'Twitter',
  },
  {
    href: 'https://4sq33la9ez.microcms.io/apis/blogs',
    icon: <RiAdminFill size={20} />,
    label: 'Admin',
  },
];
