// @format

import { Box, Block, Col, Row } from 'jsxstyle'
import React from 'react'
import Link from 'gatsby-link'
import Text from '../components/Text'
import Projects from '../components/Projects'

const IndexPage = () => (
  <Block paddingTop="4rem">
    <Intro />
    <Projects projects={projects} />
    <AboutMe />
    <Contact />
    <OtherLinks />
    <Footer />
  </Block>
)

const Intro = () => (
  <Block marginBottom="3rem" maxWidth="35rem">
    <Text marginBottom="2rem" fontSize="1.4rem" lineHeight="1.9rem">
      👋🏾 Hey. I’m Javon.
    </Text>
    <Text marginBottom="2rem" fontSize="1.4rem" lineHeight="1.9rem">
      I’m an independent Product Engineer living and working in Philadelphia.
    </Text>
    <Text fontSize="1.4rem" lineHeight="1.9rem">
      I work with businesses to design and build web and mobile applications
      that cut costs and make money.
    </Text>
  </Block>
)

const AboutMeText = ({ children, ...props }) => (
  <Text marginBottom="1.2rem" fontSize="1.2rem" {...props}>
    {children}
  </Text>
)

const AboutMe = () => (
  <Box marginBottom="3rem">
    <Box
      marginBottom="2rem"
      maxWidth="20rem"
      height="400px"
      width="100%"
      backgroundColor="#ccc"
      border="1px solid black"
    />
    <Box maxWidth="35rem">
      <AboutMeText>I'm Javon Harper.</AboutMeText>
      <AboutMeText>
        I'm a self-empoyed Product Engineer from Philadelphia.
      </AboutMeText>
      <AboutMeText>
        I'm obsessed with music and create experimental electronic music and
        hip-hop on my <Link to="#">Soundcloud</Link>.
      </AboutMeText>
      <AboutMeText>
        I also dabble in digital 3D art-- check out my{' '}
        <Link to="#">Instragram</Link> to see a taste.
      </AboutMeText>
    </Box>
  </Box>
)

const Contact = () => (
  <Box marginBottom="3rem" maxWidth="35rem">
    <AboutMeText marginBottom="0.0rem">
      Interested in working together?
    </AboutMeText>
    <AboutMeText>
      <Link to="#" className="email">
        Email me
      </Link>.
    </AboutMeText>
  </Box>
)

const OtherLinks = () => (
  <Box marginBottom="3rem" maxWidth="35rem">
    <AboutMeText>
      Find me elsewhere on <Link to="#">Github</Link>,{' '}
      <Link to="#">Soundcloud</Link>, and<Link to="#"> Instagram</Link>.
    </AboutMeText>
  </Box>
)

const Footer = () => (
  <Box marginBottom="3rem">
    <Text fontSize="0.9rem">© 2018 Javon Harper.</Text>
  </Box>
)

export default IndexPage

const projects = [
  {
    name: 'Goodnotes',
    tags: ['web app', 'music tool', 'node'],
    description: 'Listen to the top 5 tracks of any musical artist.',
  },
  {
    name: 'HyperText',
    tags: ['extended play', 'vaporwave'],
    description: '5 song Vaporwave EP.',
  },
  {
    name: 'Familiar',
    tags: ['mobile app', 'productivity'],
    description: 'Make time for the habits you want to build.',
  },
  {
    name: 'Tempo',
    tags: ['mobile app', 'music tool'],
    description:
      'Calculate the Beats Per Minute (BPM) or tempo of a song by tapping.',
  },
]
