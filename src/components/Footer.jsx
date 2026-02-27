import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          Designed &amp; built by{' '}
          <span className="text-accent font-medium">{personalInfo.name}</span>
        </p>
        <p>{year} · All rights reserved</p>
        <div className="flex gap-5">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
