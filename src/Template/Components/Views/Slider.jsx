import { SliderItem, SliderWrapper } from './style'
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { AlbumCard } from '../Items/AlbumCard';
import { GenreCard } from '../Items/GenreCard';

export const Slider = ({data}) => {
  const ref = useRef(); 
  const { events } = useDraggable(ref); 
  return (
    <SliderWrapper
      {...events}
      ref={ref}
    >
      {data.items.map((item) => <SliderItem>
        {(() => {
          switch (data.tag) {
            case "albums":
              return <AlbumCard data={item}/>
            case "genres":
              return <GenreCard data={item}/>
            default:
              return <></>
          }
        })()}
      </SliderItem>
      )}
    </SliderWrapper>
  )
}