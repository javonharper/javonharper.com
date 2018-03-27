// @format

import React from 'react'
import { Box } from 'jsxstyle'
import Text from './Text'
import Link from 'gatsby-link'

const Projects = ({ projects }) => (
  <Box marginBottom="5rem">
    <Box marginBottom="3rem">
      <Text color="#FF1505" fontSize="1.4rem" marginBottom="1rem">
        Personal Projects
      </Text>
      <Text color="#b1b1b1" maxWidth="25rem">
        Things I work on for the love of the game. If they sound useful to you,
        give them a spin and let me know what you think.
      </Text>
    </Box>

    <Box>
      {projects.map((project, i) => <ProjectItem key={i} project={project} />)}
    </Box>
  </Box>
)

const ProjectItem = ({ project }) => (
  <Box marginBottom="4rem">
    <Link to="#" style={{ display: 'block' }}>
      <Box
        backgroundColor="#7ACA80"
        height="200px"
        borderRadius="3px"
        marginBottom="1rem"
        width="100%"
        boxShadow="0px 2px 2px #ddd"
        transition="all 200ms ease-in"
        hoverTransform="scale(1.01, 1.01)"
        hoverBoxShadow="5px 5px 5px #ddd"
      />
    </Link>
    <ProjectName>{project.name}</ProjectName>
    <ProjectTags tags={project.tags} />
    <ProjectDescription>{project.description}</ProjectDescription>
  </Box>
)

const ProjectName = ({ children }) => (
  <Text marginBottom="0.6rem" fontSize="1.4rem">
    <Link to="#">{children}</Link>
  </Text>
)

const ProjectDescription = ({ children }) => <Text>{children}</Text>

const ProjectTags = ({ tags }) => (
  <Box marginBottom="1rem" color="#b1b1b1">
    {tags.join(', ')}
  </Box>
)

export default Projects
