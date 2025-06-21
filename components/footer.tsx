import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5843bf] to-[#ff9375] text-secondary-foreground py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Dimaseka.dev</h3>
            <p className="text-sm">Empowering Your Digital Presence</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/nomenklatur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/masdimasekaputra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/masnomenklatur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dimaseka.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
