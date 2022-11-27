import { RiMenu4Line } from 'react-icons/ri';
import {
  DropdownMenu,
  DropdownMenuItem,
} from '@/components/common/DropdownMenu';
import { Link } from '@/components/common/Link';
import { links } from '@/config/links';

type Props = {
  children?: React.ReactNode;
};

export const Hamburger: React.VFC<Props> = ({ children }) => {
  return (
    <DropdownMenu
      sideOffset={8}
      collisionPadding={16}
      className="vstack gap-2 max-h-80 bg-primary-2 shadow-xl border-neutral-300 border-2"
      trigger={
        <button
          className="icon-btn rounded-full border-2 border-neutral-300 bg-white dark:bg-black shadow-xl outline-none"
          aria-label="hamburger menu"
        >
          <RiMenu4Line size={28} />
        </button>
      }
    >
      <div className="center">
        {links.map(({ name, href, icon }) => (
          <DropdownMenuItem
            key={name}
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Escape' }),
              )
            }
            className="text-primary-1 hover:outline-none hover:text-teal-800 hover:dark:text-teal-400 focus:text-teal-800 focus:dark:text-teal-400 capitalize select-none cursor-pointer"
          >
            <Link href={href} passHref>
              <a className="hstack gap-0 py-3 px-5 hover:underline">
                {icon} {name}
              </a>
            </Link>
          </DropdownMenuItem>
        ))}
      </div>
      {children}
    </DropdownMenu>
  );
};
