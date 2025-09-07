import { useState } from "react"

const DownloadResumeButton = () => {
  const [downloaded, setDownloaded] = useState(false);
  const resumeLink = "https://drive.google.com/uc?export=download&id=1_HGiOr1JoMtvIR30w-jJgfrkVpVy6ZrP";

  return (
    <a 
      href={resumeLink} 
      download="Young_Kim_Resume.pdf" 
      onClick={() => setDownloaded(true)}
    >
      <button className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
        <p className="flex items-center justify-center gap-2">
          <img src="assets/download.png" alt="download" className="w-6" />
          {downloaded ? "Downloaded!" : "Download Resume"}
        </p>
      </button>
    </a>
  )
}

export default DownloadResumeButton
