import React from 'react'
import { PageWrapper } from "./style"
import { Search } from '../Components/Search/Search'
import { Block } from '../Blocks/Block/Block'
import { MOCKUP_DATA } from './mockup_data'

export const SearchPage = () => {
  const blocks = MOCKUP_DATA.searchPage || [];
  return (
    <PageWrapper>
      <div className='container'>
        <Search />
        {blocks.map(block => <Block data={block}/>)}
      </div>
    </PageWrapper>
  )
}