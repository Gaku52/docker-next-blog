import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { spreadsheet } from '@/config/spreadsheet';

export const DetailedProfile = () => (
  <div className="select-none vstack items-center gap-2 p-2 bg-primary-2">
    <div className="font-bold text-xl text-primary-1">詳細プロフィール</div>
    <div className="items-center gap-24 grid p-5 grid-cols-2">
    <h1 className="text-lg font-bold text-primary-1">
    <Image
        className="object-cover w-20 h-20 rounded-full m-auto"
        alt="avatar"
        src="/assets/author.png"
      />
      <h1 className="center lg:text-base font-bold text-primary-1">Gaku Ogasawara</h1>
    </h1>
        <div className="center lg:text-base text-xs font-medium text-primary-1">
        1996年生まれの26歳<br />
        学習期間 : 2022.04～
        </div>
    </div>
    <h1 className="col-span-4 m-auto text-base font-bold text-primary-1">選定した技術一覧</h1><br />
    <p className="grid lg:grid-cols-5 gap-8 text-center text-primary-1">
      <div className="font-semibold">
      ◆フロントエンド<br />
      HTML/CSS/JavaScript<br />
      TypeScript/React/Next.js<br /><br />
      </div>
      <div className="font-semibold">
      ◆バックエンド<br />
      PHP/Laravel(現在、学習中)<br /><br />
      </div>
      <div className="font-semibold">
      ◆バージョン管理ツール<br />
      GitHub<br /><br />
      </div>
      <div className="font-semibold">
      ◆開発環境<br />
      PC:Windows 11<br />
      OS:Linux(WSL2上でUbuntu)<br />
      Editor:Visual Studio Code<br />
      コンテナ仮想化技術:Docker<br /><br />
      </div>
      <div className="font-semibold">
      ◆今後の学習予定<br />
      CI/CDパイプラインの構築<br />
      Terraformでインフラのコード化<br /><br />
      </div>
    </p>

    <div className="flex gap-4">
      {spreadsheet.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
);
