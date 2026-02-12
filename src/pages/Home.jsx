import React from 'react';
import SnakeGame from '../features/SnakeGame';

const Home = () => {
  return (
    <div className="flex-1 flex items-center justify-center relative overflow-hidden">
      {/* Background blur decorations */}
      <div className="absolute pointer-events-none" style={{ right: '10%', top: '15%' }}>
        <div
          className="w-[400px] h-[400px] rounded-full opacity-40 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #615fff 0%, transparent 70%)' }}
        />
      </div>
      <div className="absolute pointer-events-none" style={{ right: '25%', bottom: '5%' }}>
        <div
          className="w-[350px] h-[350px] rounded-full opacity-30 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #00d5be 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px] lg:gap-[64px] px-[24px] md:px-[64px] w-full max-w-[1600px]">
        {/* Left: Introduction */}
        <div className="flex flex-col gap-[8px] max-w-[504px]">
          <p className="text-body-lg text-theme-fg">Hi all. I am</p>
          <h1 className="text-[36px] leading-[40px] md:text-heading-h1 text-heading font-[450]">
            Rajdeep Bastakoti
          </h1>
          <p className="text-[20px] md:text-heading-h4 text-ide-indigo font-[450]">
            &gt; Full-stack developer
          </p>

          <div className="flex flex-col gap-[8px] mt-[32px]">
            <p className="text-body-sm md:text-body-md text-ide-slate-500">
              &#47;&#47; complete the game to continue
            </p>
            <p className="text-body-sm md:text-body-md text-ide-slate-500">
              &#47;&#47; you can also see it on my GitHub page
            </p>
            <p className="text-body-sm md:text-body-md text-theme-fg">
              <span className="text-ide-indigo">const</span>{' '}
              <span className="text-ide-teal-400">githubLink</span>{' '}
              <span className="text-heading">=</span>{' '}
              <a
                href="https://github.com/RBCodewalker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:underline"
              >
                "https://github.com/RBCodewalker"
              </a>
            </p>
          </div>
        </div>

        {/* Right: Snake Game */}
        <div className="shrink-0">
          <SnakeGame />
        </div>
      </div>
    </div>
  );
};

export default Home;
