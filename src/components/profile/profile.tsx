import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'


function Profile()
{

  return (<div className="flex flex-col items-center gap-3">
    <div className="relative w-20 h-20 rounded-full overflow-hidden">
      <Image
        src="/placeholder.svg?height=96&width=96"
        alt="Profile Picture"
        width={96}
        height={96}
        className="object-cover"
      />
    </div>
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/jaka-k"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-accent-teal transition-colors"
        aria-label="GitHub"
      >
        <Github size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/jaka-krajnc-90/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-accent-teal transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>
    </div>
  </div>)
}

export default Profile