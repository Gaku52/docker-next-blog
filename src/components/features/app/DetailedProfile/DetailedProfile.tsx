import { MdAccountBox } from 'react-icons/md';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { spreadsheet } from '@/config/spreadsheet';

export const DetailedProfile = () => (
  <div className="select-none vstack items-center gap-0 bg-primary-2">
    <div className="font-bold text-xl center gap-2 py-2 px-3 mt-10 border-b-2 border-teal-800 dark:border-teal-400 text-primary-1"><MdAccountBox />詳細プロフィール</div>
    <div className="items-center gap-20 grid p-5 grid-cols-2">
      <h1 className="text-primary-1">
        <Image
            className="object-cover w-16 h-16 rounded-full m-auto"
            alt="avatar"
            src="/assets/author.png"
        />
        <h1 className="center lg:text-base text-xs font-bold text-primary-1">Gaku Ogasawara</h1>
      </h1>
      <div className="center lg:text-base text-xs font-medium text-primary-1">
        1996年生まれの26歳<br />
        学習期間 : 2022.04～<br />
        </div>
    </div>
    <p className="grid lg:grid-cols-5 gap-8 text-center text-primary-1">
      <div className="font-semibold">
      ◆フロントエンド<br />
      HTML/CSS/JavaScript<br />
      TypeScript/React/Next.js<br /><br />
      </div>
      <div className="font-semibold">
      ◆バックエンド<br />
      ※現在、技術選定中<br /><br />
      </div>
      <div className="font-semibold">
      ◆バージョン管理ツール<br />
      GitHub<br /><br />
      </div>
      <div className="font-semibold">
      ◆開発環境<br />
      PC:Windows 11<br />
      OS:Linux(WSL2,Ubuntu)<br />
      Editor:Visual Studio Code<br />
      コンテナ仮想化:Docker<br /><br />
      </div>
      <div className="font-semibold">
      ◆今後の学習予定<br />
      CI/CDパイプラインの構築<br />
      Terraformでインフラのコード化<br /><br />
      </div>
    </p>
    {spreadsheet.map(({ href, icon, label }) => (
          <Link key={href} href={href} passHref>
            <a className="text-primary-1 center hover:underline mb-10" aria-label={label}>
            <h1 className="m-auto text-base font-medium text-primary-1">スキルシート</h1>
              {icon}
            </a>
          </Link>
    ))}
  </div>
);
