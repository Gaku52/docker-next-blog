import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';

export const Profile = () => (
  <div className="select-none vstack items-center gap-5 p-6 rounded-lg bg-primary-2">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="avatar"
        src="/assets/author.png"
      />
      <h1 className="text-2xl font-semibold text-primary-1">Gaku Ogasawara</h1>
    </div>

    <p className="text-primary-1">
      1996年生まれの26歳
      <br />
      2022年4月からプログラミング学習開始しました。
      <br />
      現在JavaScript/TypeScript/React/Next.js/Gitなどの学習をしております。
    </p>

    <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
);
