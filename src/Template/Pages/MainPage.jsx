import React from 'react'
import { PageWrapper } from "./style"
import { Block } from '../Blocks/Block/Block'
import { MOCKUP_DATA } from './mockup_data'

export const MainPage = () => {
  const blocks = MOCKUP_DATA.mainPage || [];
  return (
    <PageWrapper>
      <div className='container'>
        <h2>Good morning</h2>
        {blocks.map(block => <Block data={block}/>)}
      </div>
    </PageWrapper>
  )
}