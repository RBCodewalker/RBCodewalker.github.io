import React from 'react';
import { Link } from 'react-router-dom';

const errorCode = [
  'class PageNotFound extends Error {',
  '  constructor() {',
  '    super("The page you are looking for");',
  '    this.name = "404";',
  '    this.message = "does not exist";',
  '    this.description = [',
  '      "It might have been moved",',
  '      "or the URL might be wrong.",',
  '      "",',
  '      "Please check the URL or",',
  '      "navigate back to the home page."',
  '    ];',
  '  }',
  '}',
  '',
  'throw new PageNotFound();',
];

const NotFound = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-[32px] md:px-[64px]">
      <div className="flex flex-col md:flex-row items-center gap-[48px] md:gap-[64px] max-w-[1156px]">
        {/* Large 404 */}
        <h1 className="text-[120px] md:text-[180px] leading-none font-bold text-heading select-none">
          404
        </h1>

        {/* Code snippet */}
        <div className="flex">
          <div className="flex flex-col items-end pr-[24px] select-none shrink-0">
            {errorCode.map((_, i) => (
              <span key={i} className="text-body-md text-ide-slate-500 leading-[27px]">
                {i + 1}
              </span>
            ))}
          </div>
          <div className="flex flex-col">
            {errorCode.map((line, i) => (
              <span key={i} className="text-body-md text-theme-fg leading-[27px] whitespace-pre">
                {line}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Back home link */}
      <Link
        to="/"
        className="absolute bottom-[64px] bg-primary text-primary-inv text-body-sm px-[12px] py-[10px] rounded-ide-md hover:brightness-110 transition-all"
      >
        _back-to-home
      </Link>
    </div>
  );
};

export default NotFound;
