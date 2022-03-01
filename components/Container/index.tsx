import classNames from 'classnames'
import React from 'react'
import style from './index.module.scss'

export interface IContainerProps {
  children: React.ReactNode
  direction?: 'col' | 'row'
  className?: string
  center?: boolean
}

const Container = ({
  children,
  direction = 'col',
  className,
  center = false
}: IContainerProps) => {
  return <div className={classNames({
    [style.Container]: true,
    [style[direction]]: direction,
    [style.center]: center
  }) + ` ${className}`}>{children}</div>
}

export default Container
