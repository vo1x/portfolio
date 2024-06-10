import React from 'react';
import Socials from './Socials';
function Branding() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl font-semibold">volx</div>
      <div className="text-xl text-slate-300">Frontend Developer</div>

      <div className="my-4 max-w-screen-md text-center text-slate-400">
        I'm a second-year Computer Science student with a passion for crafting immersive web
        applications through design and development.
      </div>
      <div className="mb-4">
        <Socials />
      </div>
    </div>
  );
}

export default Branding;
