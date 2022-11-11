import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { spreadsheet } from '@/config/spreadsheet';

export const DetailedProfile = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-2">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-20 h-20 rounded-full"
        alt="avatar"
        src="/assets/author.png"
      />
      <h1 className="text-lg font-bold text-primary-1">gbyme</h1>
    </div>
    <h1 className="text-lg font-bold text-primary-1">詳細な自己紹介</h1>
    <p className="text-center text-primary-1">
      1996年生まれの26歳<br />
      学習開始：2022年4月～現在<br /><br />
      <h1 className="text-sm font-bold text-primary-1">現在学習中の選定した技術一覧</h1><br />
      ◆フロントエンド<br />
      HTML/CSS/JavaScript<br />
      TypeScript/React/Next.js<br /><br />
      ◆バックエンド<br />
      PHP/Laravel(現在、学習中)<br /><br />
      ◆バージョン管理ツール<br />
      GitHub<br /><br />
      ◆開発環境<br />
      PC:Windows 11<br />
      OS:Linux(WSL2上でUbuntu)<br />
      Editor:Visual Studio Code<br />
      コンテナ仮想化技術:Docker<br />
      <br />
      ◆今後の学習予定<br />
      CI/CDパイプラインの構築<br />
      Terraformでインフラのコード化<br /><br />
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
