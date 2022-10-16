import { useEffect } from 'react';
import { MdOutlineContentCopy } from 'react-icons/md';
import tocbot from 'tocbot';

export const Toc: React.VFC = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h2, h3',
      headingsOffset: 220,
      scrollSmoothOffset: -70,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="select-none vstack gap-3 p-6 bg-primary-2">
      <div className="center">
        <div className="center gap-2 py-2 px-3 border-b-2 border-teal-200 dark:border-teal-200 text-base font-bold text-primary-1">
          <MdOutlineContentCopy />
          目次
        </div>
      </div>
      <nav className="toc" />
    </div>
  );
};
