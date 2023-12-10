import { SearchWrapper } from "./style"

export const Search = () => {
  return (
    <SearchWrapper>
      <img src="/search.png" alt="" />
      <input type="search" placeholder="Artists, songs, or podcasts" />
    </SearchWrapper>
  )
}