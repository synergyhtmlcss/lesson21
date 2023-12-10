import React, { useEffect, useState } from 'react'
import { BarWrapper, WrapperToggle } from './style'
import { useWindowSize } from "@uidotdev/usehooks";
import { MOCUP_DATA } from "./mocup_data"
import { BarLink } from '../../Components/BarLink/BarLink';

export const Bar = () => {
  const size = useWindowSize();
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    if (size.width < 1280) {
      setShowBar(false)
    } else {
      setShowBar(true)
    }
  }, [size])

  return (
    <>
      <BarWrapper showBar={showBar}>
        {
          MOCUP_DATA.map(group => <div>
            {group.map(item => <BarLink item={item}/>)}
          </div>)
        }
      </BarWrapper>
      {
        size.width < 1280 && 
        <WrapperToggle onClick={() => setShowBar(prev => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" height="20px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </WrapperToggle>
      }
    </>
  )
}