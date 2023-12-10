import { ToolBarItem } from './style'

export const ToolBar = () => {
  return (
    <>
      <ToolBarItem>
        <button>
          <img src="/raphael_shuffle.svg" alt="" />
        </button>
        <div>
          <button>
            <img src="/bx_bx-skip-previous.svg" alt="" />
          </button>
          <button>
            <img src="/gridicons_play.svg" alt="" />
          </button>
          <button>
            <img src="/bx_bx-skip-previous-1.svg" alt="" />
          </button>
        </div>
        <button>
          <img src="/fluent_arrow-repeat-all-20-regular.svg" alt="" />
        </button>
      </ToolBarItem>
    </>
  )
}