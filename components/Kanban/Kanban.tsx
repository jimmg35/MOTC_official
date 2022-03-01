import React from 'react'
import classNames from 'classnames'
import style from './Kanban.module.scss'

export interface IKanbanProps {
  children?: React.ReactNode
  imgSrc?: string
  className?: string
  leaveAnimation?: boolean
}

const Kanban = ({
  children,
  imgSrc,
  className = '',
  leaveAnimation = false
}: IKanbanProps) => {
  const getCssVariable = () => ({ [`--KanbanImg`]: `url('${imgSrc}')` }) as { [k: string]: string }
  return (
    <div className={`${style.Kanban} ${className}`} >
      <div style={getCssVariable()} className={classNames({
        [style.kanbanImg]: true,
        magictime: true,
        slideRightReturn: !leaveAnimation,
        slideLeft: leaveAnimation
      })}>
        <div className={style.KanbanContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Kanban
