import React, { useState } from 'react'
import { NowPlayingItem } from './style'

export const NowPlaying = ({item}) => {
  const [isLiked, setIsLiked] = useState(item.isLiked || false);
  return (
    <>
      <NowPlayingItem>
        <img src={item.image} alt="" />
        <div>
          <h5>{item.title}</h5>
          <span>{item.subtitle}</span>
        </div>
        <button onClick={() => setIsLiked(prev => !prev)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.205 4.79099C19.6536 4.2357 18.9979 3.79488 18.2756 3.49387C17.5532 3.19286 16.7785 3.03759 15.996 3.03699C14.5158 3.03723 13.0897 3.59326 12 4.59499C10.9104 3.59309 9.48419 3.03703 8.00398 3.03699C7.22052 3.0378 6.44496 3.19355 5.72192 3.49526C4.99888 3.79696 4.34265 4.23868 3.79098 4.79499C1.43798 7.15799 1.43898 10.854 3.79298 13.207L12 21.414L20.207 13.207C22.561 10.854 22.562 7.15799 20.205 4.79099V4.79099Z" 
            fill={isLiked? "red" : "white"}/>
          </svg>
        </button>
      </NowPlayingItem>
    </>
  )
}