import { DownloadIcon, MailIcon } from 'lucide-react';
function ContactButtons() {
  return (
    <div className="flex w-max items-center gap-4">
      <button
        disabled
        className="flex w-52 cursor-pointer items-center gap-4 rounded-md  border-t border-t-slate-700 bg-slate-800 p-2 text-slate-300 shadow-md"
      >
        <span>
          <DownloadIcon></DownloadIcon>
        </span>
        <span>Download Resume</span>
      </button>
      <button
        onClick={() =>
          (window.location.href =
            'mailto:vo1x.original@gmail.com?subject=Subject%20Here&body=Message%20Here')
        }
        className="flex w-max cursor-pointer items-center gap-4 rounded-md  border-t border-t-slate-700 bg-slate-800 p-2 text-slate-300 shadow-md"
      >
        <MailIcon></MailIcon>
        <span>Email me!</span>
      </button>
    </div>
  );
}

export default ContactButtons;
