import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import 'applause-button/dist/applause-button.js'
import 'applause-button/dist/applause-button.css'
import { rhythm } from "../utils/typography"

interface ApplauseButtonProps {
  className?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--accent-color-1);

  .count {
    color: inherit;
  }

  applause-button {
    margin-right: ${rhythm(0.2)};
    &:not(.clapped):hover {
      opacity: 0.5;
    }

    .style-root {
      &:after {
        display: none;
      }

      .shockwave, .count-container {
        display: none;
      }

      svg {
        margin: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
  
`

function ApplauseButton(props: ApplauseButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const [count, setCount] = useState('-')

  useEffect(() => {
    const count: HTMLElement = ref.current.querySelector('.count');
    
    const observer = new MutationObserver(() => {
      setCount(count.innerText)
    });
    
    observer.observe(count, { subtree: true, childList: true });
    return () => { observer.disconnect() }
  }, [ref, setCount])

  return (
    <Wrapper>
      <applause-button
        ref={ref}
        style={{ width: '24px', height: '24px' }}
        color="var(--accent-color-1)"
      />
      <span className="count">{count}</span>
    </Wrapper>
  )
}

export default ApplauseButton
export { ApplauseButton }
export type { ApplauseButtonProps }