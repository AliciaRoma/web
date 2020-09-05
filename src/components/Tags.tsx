import React, { CSSProperties } from 'react'
import { kebabCase } from 'lodash'
import { rhythm } from "../utils/typography"

interface TagsProps {
  className?: string
  style?: CSSProperties
  tags: string[]
}

function Tags({ className, tags, style }: TagsProps) {
  return (
    <ul
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        listStyle: 'none',
        marginBottom: 0,
        paddingLeft: 0,
        ...style,
     }}
    >
      {tags.map(tag => (
        <li
          key={tag}
          style={{
            marginRight: rhythm(0.25),
            marginBottom: rhythm(0.25),
          }}
        >
          <a
            
            href={`/tags/${kebabCase(tag)}`}
            style={{
              display: 'block',
              paddingTop: rhythm(0.2),
              paddingBottom: rhythm(0.2),
              paddingLeft: rhythm(0.4),
              paddingRight: rhythm(0.4),
              border: '1px solid var(--accent-color-1)',
              borderRadius: '2px',
              lineHeight: 'normal',
            }}>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Tags
export type { TagsProps }