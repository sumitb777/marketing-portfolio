export default function DownloadButton() {
  return (
    <a
      href="/DM-Resumesumit.pdf"
      download
      className='px-6 py-3 rounded-full border border-white/10 
             bg-white/5 text-white backdrop-blur
             hover:bg-[#0A66C2] transition '
    >
      📄  Resume
    </a>
  );
}
