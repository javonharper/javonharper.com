// @format

import React from 'react'

import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <section>
      <div className="hero-text">👋🏾 Hey. I’m Javon.</div>
      <div className="hero-text">
        I’m an independent Developer and Designer living and working in
        Philadelphia.
      </div>
    </section>
    <section>
      <h2 className="section-header">Personal Projects</h2>
      <div className="section-description">
        Things I work on for the love of the game. If they sound interesting to
        you, give them a spin and let me know what you think.
      </div>
      <div>
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </section>
    <section class="about">
      <img className="personal-pic" src="static/javon-small.jpg" />

      <div className="about-blurb">
        <div className="about-text">I'm Javon Harper.</div>
        <div className="about-text">
          I'm a self-empoyed Developer and Designer from Philadelphia.
        </div>
        <div className="about-text">
          I'm obsessed with music and create experimental electronic music and
          hip-hop on my <a href="#">Soundcloud </a>.
        </div>
        <div className="about-text">
          I also dabble in digital 3D art-- check out my{' '}
          <a href="#">Instragram </a>to see a taste.
        </div>
      </div>
    </section>
    <section>
      <div>Interested in working together?</div>
      <div>
        <a href="mailto: javon@javonharper.com">Email me</a>
      </div>
    </section>
    <section>
      Find me elsewhere on <a href="#">Github</a>, <a href="#">Soundcloud</a>,
      and <a href="#">Instagram</a>.
    </section>
    <footer>© 2018 Javon Harper.</footer>
  </div>
)

const ProjectItem = ({ project }) => (
  <div style={{ marginBottom: '3rem' }}>
    <div
      className="project-img"
      style={{
        backgroundColor: '#7aca80',
        boxShadow: '#ddd 0px 2px 2px',
        height: '200px',
        width: '100%',
        borderRadius: '3px',
        transition: 'all 200ms ease-in',
        marginBottom: '1rem',
      }}
    />
    <a className="project-name" href="#">
      {project.name}
    </a>
    <div className="tags">{project.tags.join(', ')}</div>
    <div>{project.description}</div>
  </div>
)

export default IndexPage

const projects = [
  {
    name: 'Project One',
    tags: ['tag one', 'tag two', 'tag three'],
    description: 'Do the thing and do it well. For all your needs.',
  },
  {
    name: 'Project One',
    tags: ['tag one', 'tag two', 'tag three'],
    description: 'Do the thing and do it well. For all your needs.',
  },
  {
    name: 'Project One',
    tags: ['tag one', 'tag two', 'tag three'],
    description: 'Do the thing and do it well. For all your needs.',
  },
  {
    name: 'Project One',
    tags: ['tag one', 'tag two', 'tag three'],
    description: 'Do the thing and do it well. For all your needs.',
  },
  {
    name: 'Project One',
    tags: ['tag one', 'tag two', 'tag three'],
    description: 'Do the thing and do it well. For all your needs.',
  },
]
