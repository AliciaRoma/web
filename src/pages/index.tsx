import React from "react"
import styled from "styled-components"
import { PageProps, Link, graphql } from "gatsby"
import SEO from "../components/seo"
import BaseTypewriterEffect from "../components/TypewriterEffect"

const TYPEWRITER_STRINGS = [
  'escritora',
  'periodista',
  'correctora de estilo',
  'correctora ortotipográfica',
  'comunicadora',
  'asesora lingüística',
  'redactora',
  'maquetadora editorial',
  'maga gramatical',
]

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Content = styled.div`
  max-width: 580px;
`
const Title = styled.h1`
  margin: 0;
  font-size: 2.375rem;
`
const TypewriterEffectWrapper = styled.div`
  font-size: 1.4rem;
  *::-moz-selection {
    background-color: transparent;
    color: unset;
  }
  *::selection {
    background-color: transparent;
    color: unset;
  }
`
const TypewriterEffect = styled(BaseTypewriterEffect)`
  color: var(--accent-color-1);
  --caret-color: var(--accent-color-1);
`
const Links = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  margin-top: 32px;
`
const Separator = styled.div`
  border-left: 1px solid var(--accent-color-1);
  margin: 0 8px;
`
const EmailLink = styled.a`
  font-family: monospace;
  color: var(--primary-text-color);
  opacity: 0.87;
`

function Landing({ data, location }: PageProps<Data>) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Wrapper>
      <SEO title="Home" />
      <Content>
        <Title>{siteTitle}</Title>
        <TypewriterEffectWrapper>
          <span>Soy</span>
          {' '}
          <TypewriterEffect strings={TYPEWRITER_STRINGS} />
        </TypewriterEffectWrapper>
        <Links>
          <Link to={'/blog'}>
            blog
          </Link>
          <Separator />
          <EmailLink href="mailto:hola@aliciaroma.es">
            hola@aliciaroma.es
          </EmailLink>
        </Links>
      </Content>
    </Wrapper>
  )
}

export default Landing
export { pageQuery }
