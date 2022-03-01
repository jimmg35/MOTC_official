import React, { useState } from 'react'
import style from './index.module.scss'
import Image from 'next/image'

export interface IIconHoverParam {
  icon: string
  hoverIcon: string
}

const IconHover = (props: IIconHoverParam) => {
  const [iconShow, seticonShow] = useState<boolean>(true)

  return (
    <div className={style.IconHover}
      onMouseEnter={() => { seticonShow(prev => !prev) }}
      onMouseLeave={() => { seticonShow(prev => !prev) }}
    >
      <div className={style.iconContainer}>
        {
          iconShow
            ? <Image className={style.icon} src={props.icon} width={118} height={118} />
            : <Image className={style.hoverIcon} src={props.hoverIcon} width={118} height={118} />
        }
      </div>
    </div>
  )
}

export default IconHover
