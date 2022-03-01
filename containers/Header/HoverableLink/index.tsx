import React from 'react'
import LinkButton from '../LinkButton'
import style from './index.module.scss'

export interface IHoverableLinkProps {
  href: string
  text: string
  children: React.ReactNode
}

const HoverableLink = ({
  href,
  text,
  children
}: IHoverableLinkProps) => {
  return (
    <div className={style.HoverableLink}>
      <LinkButton href={href}>{text}</LinkButton>
      <div className={style.hoverContent}>
        {children}
      </div>
    </div>
  )
}

export default HoverableLink
