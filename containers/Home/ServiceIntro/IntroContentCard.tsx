import React from 'react'
import LinkContent from '../../../components/LinkContent'
import style from './IntroContentCard.module.scss'

export interface IIntroContentCardProps {
  href: string
  hrefName: string
  title: string
  description: string
  children: React.ReactNode
  detailWidth?: number
}

const IntroContentCard = ({
  href,
  hrefName,
  title,
  description,
  children,
  detailWidth = 150
}: IIntroContentCardProps) => {
  const getCssVariable = () => {
    return {
      '--detailItemWidth': detailWidth + 'px'
    } as { [k: string]: string }
  }
  return (
    <div className={style.IntroContentCard} style={getCssVariable()}>
      <div className={style.overview}>
        <span className={style.title}>{title}</span>
        <p className={style.description}>{description}</p>
        <LinkContent href={href}>{hrefName}</LinkContent>
      </div>
      <div className={style.detail}>{children}</div>
    </div>
  )
}

export default IntroContentCard
