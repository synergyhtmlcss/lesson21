import React from 'react'
import { ToolsWrapper } from './style'
import { MOCKUP_DATA } from './mockup_data'
import { NowPlaying } from '../../Components/NowPlaying/NowPlaying'
import { ToolBar } from '../../Components/ToolBar/ToolBar'

export const Tools = () => {
  return (
    <ToolsWrapper>
      <NowPlaying item={MOCKUP_DATA} />
      <ToolBar />
    </ToolsWrapper>
  )
}