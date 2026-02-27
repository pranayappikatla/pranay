import { useState } from 'react'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  return (
    <div className="card flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="text-accent">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="View source code"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="View live demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-accent/80 bg-accent/10 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const displayed = showAll ? projects : featured

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-accent font-mono text-sm mb-2">What I've built</p>
        <h2 className="section-heading">Projects</h2>
        <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length > featured.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-outline"
          >
            {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
          </button>
        </div>
      )}
    </section>
  )
}
