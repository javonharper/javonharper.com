// @format

import React from 'react'

import Link from 'gatsby-link'
import goodnotesImage from '../screenshots/goodnotes.png'
import familiarImage from '../screenshots/familiar.png'
import tempoImage from '../screenshots/tempo.png'

const IndexPage = () => (
  <div>
    <section>
      <div className="hero-text">
        <span style={{ marginRight: '1rem' }}>👋🏿</span>
        <span className="hero-text">Hey. I’m Javon.</span>
      </div>
      <div className="hero-text">
        I’m an independent developer and designer living and working in
        Philadelphia.
      </div>
      <div style={{ maxWidth: '35rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          I work with businesses to solve tough problems through straightforward
          design and clear communication. I've been working independently since
          2014.
        </div>
        <div>
          Check out my professional projects at{' '}
          <a href="http://www.shuttleport.io">Shuttleport.io →</a>
        </div>
      </div>
    </section>
    <section>
      <h2 className="section-header">
        <span
          style={{
            boxShadow: 'inset 0 -12px 0 0px #fbfb8f',
            paddingRight: '2rem',
          }}
        >
          Side Projects
        </span>
      </h2>
      <div className="section-description">
        Things I work on for the love of the game. If they sound interesting to
        you, give them a spin and let me know what you think.
      </div>
      <div className="projects">
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </section>
    <section>
      <h2 className="section-header">
        <span
          style={{
            boxShadow: 'inset 0 -12px 0 0px #fbfb8f',
            paddingRight: '2rem',
          }}
        >
          Music
        </span>
      </h2>
      <div className="projects">
        {music.map((project, i) => <ProjectItem key={i} project={project} />)}
      </div>
    </section>
    <section className="about">
      <div className="personal-pic-wrapper">
        <img className="personal-pic" src="static/javon-small.jpg" />
      </div>

      <div className="about-blurb">
        <div className="about-text">My name is Javon Harper.</div>
        <div className="about-text">
          For a living I design, prototype, test, build and deliver web and
          mobile applications. I run a web and mobile app consultancy called{' '}
          <a href="http://www.shuttleport.io">Shuttleport</a>.
        </div>
        <div className="about-text">
          I'm obsessed with music and create experimental electronic music and
          hip-hop on my{' '}
          <a href="https://www.soundcloud.com/yalxo/tracks">Soundcloud </a>.
        </div>
        <div className="about-text">
          I also dabble in digital 3D art-- check out my{' '}
          <a href="https://www.instagram.com/javonharper">Instagram </a>to see a
          taste.
        </div>
      </div>
    </section>
    <section className="contact">
      <div style={{ marginBottom: '0.8rem' }}>
        Interested in working together?
      </div>
      <div>
        <a href="mailto: javon@javonharper.com">Email me</a>.
      </div>
    </section>
    <section className="links">
      Find me elsewhere on{' '}
      <a href="https://www.github.com/javonharper">Github</a>,{' '}
      <a href="https://www.soundcloud.com/yalxo">Soundcloud</a>, and{' '}
      <a href="https://www.instagram.com/javonharper">Instagram</a>.
    </section>
    <footer>© 2018 Javon Harper.</footer>
  </div>
)

const ProjectItem = ({ project }) => (
  <div style={{ marginBottom: '4rem' }}>
    <a href={project.link}>
      <ProjectImage image={project.image} />
    </a>
    <a className="project-name" href={project.link} target="_blank">
      {project.name}
    </a>
    <div className="tags">{project.tags.join(', ')}</div>
    <div style={{ maxWidth: '25rem' }}>{project.description}</div>
  </div>
)

const ProjectImage = ({ image }) => (
  <div>
    {image ? (
      <div>
        <img className="project-img" src={image} />
      </div>
    ) : null}
  </div>
)

export default IndexPage

const projects = [
  {
    name: 'Goodnotes.io',
    link: 'http://goodnotes.io',
    image: goodnotesImage,
    tags: ['music tool', 'web app'],
    description:
      'Search any musical artist and find their 5 most popular songs and videos.',
  },
  {
    name: 'Familiar',
    link:
      'https://play.google.com/store/apps/details?id=com.javonharper.familiar',
    image: familiarImage,
    tags: ['productivity tool', 'mobile app'],
    description: 'Make time for the habits you want to build.',
  },
  {
    name: 'Tempo',
    link:
      'https://play.google.com/store/apps/details?id=com.javonharper.tempo&hl=en_US',
    tags: ['music tool', 'mobile app', 'tag three'],
    image: tempoImage,
    description:
      'Calculate the Beats Per Minute (BPM) or tempo of a song by simply tapping your screen.',
  },
]

const music = [
  {
    name: 'Re:creation Ltd. - HyperText',
    link: 'https://soundcloud.com/recreation-ltd/sets/hypertext',
    tags: ['music', 'vaporwave', 'ep'],
    description: '5 song vaporwave EP. ',
  },
  {
    name: 'Subterrain',
    link: 'https://soundcloud.com/yalxo/sets/subterrain',
    tags: ['music', 'ambient', 'ep'],
    description: '5 song ambient EP. ',
  },
]
