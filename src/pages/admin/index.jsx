import dynamic from 'next/dynamic';

const CMS = dynamic(
  () => import('netlify-cms-app').then((module) => module.default),
  { ssr: false }
);

export default function AdminPage() {
  return (
    <div>
      <CMS />
    </div>
  );
}
