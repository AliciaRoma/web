import React from 'react'
import { rhythm } from "../utils/typography"
import Bio from "./bio"
import ApplauseButton from './ApplauseButton'
import Tags, { TagsProps } from './Tags'
import SocialIcons from './SocialIcons/SocialIcons'

interface BlogPostFooterProps extends Partial<TagsProps> {
  className?: string
}

function BlogPostFooter({ className, tags }: BlogPostFooterProps) {
  return (
    <footer className={className}>
      <Tags tags={tags} style={{ marginBottom: rhythm(0.8) }} />

      <div
        style={{
          marginBottom: rhythm(0.4),
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ApplauseButton />
        <SocialIcons />
      </div>
      <hr
        style={{
          marginTop: 0,
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
    </footer>
  )
}

export default BlogPostFooter
export type { BlogPostFooterProps }