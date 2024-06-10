import React from 'react';
import { DownloadIcon, MailIcon } from 'lucide-react';
function ContactButtons() {
  return (
    <div className="flex w-max items-center gap-4">
      <button className="flex w-52 items-center gap-4 rounded-md  border-t border-t-slate-700 bg-slate-800 p-2 text-slate-300 shadow-md">
        <span>
          <DownloadIcon></DownloadIcon>
        </span>
        <span>Download Resume</span>
      </button>
      <button className="flex w-max items-center gap-4 rounded-md  border-t border-t-slate-700 bg-slate-800 p-2 text-slate-300 shadow-md">
        <MailIcon></MailIcon>
        <span>Email me!</span>
      </button>
    </div>
  );
}

export default ContactButtons;
