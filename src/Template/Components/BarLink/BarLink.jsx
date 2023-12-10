import { BarLinkItem } from "./style"

export const BarLink = ({item}) => {
  return (
    <>
      <BarLinkItem to={item.link || "/"}>
        {item.image && <img src={item.image} alt="" />}
        <span>{item.title}</span>
      </BarLinkItem>
    </>
  )
}