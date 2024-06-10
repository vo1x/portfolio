function Footer() {
  return (
    <div className="p-4 pb-8 pt-24 text-sm text-slate-500 md:pt-12">
      Built with{' '}
      <span className="font-semibold text-slate-400">
        <a href="https://react.dev/" target="_blank">
          React.js
        </a>
      </span>
      , and{' '}
      <span className="font-semibold text-slate-400">
        <a href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </a>
      </span>
      , hosted on{' '}
      <span className="font-semibold text-slate-400">
        <a href="https://vercel/com/home" target="_blank">
          Vercel
        </a>
      </span>
      . Find the source code on{' '}
      <span className="font-semibold text-slate-400">
        <a href="https://github.com/vo1x/portfolio" target="_blank">
          Github
        </a>
      </span>
      .
    </div>
  );
}

export default Footer;
