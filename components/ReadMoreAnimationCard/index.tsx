import React from 'react'
import style from './index.module.scss'

export interface IReadMoreAnimationCardProps {
  imgSrc: string
  shownChild: React.ReactNode
  hiddenChild: React.ReactNode
}

const ReadMoreAnimationCard = ({
  imgSrc,
  shownChild,
  hiddenChild
}: IReadMoreAnimationCardProps) => {
  const getCssVariable = () => ({ [`--bgImg`]: `url('${imgSrc}')` }) as { [k: string]: string }
  return (
    <div className={style.ReadMoreAnimationCard} style={getCssVariable()}>
      <div className={style.BGColor}></div>
      <div className={style.BlackMask}></div>
      <div className={style.ShownContent}>{shownChild}</div>
      <div className={style.HiddenContent}>{hiddenChild}</div>
    </div>
  )
}

export default ReadMoreAnimationCard
