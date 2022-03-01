import React, { useState } from 'react'
import style from './index.module.scss'
import Typography from '../../../components/Typography'
import { Divider } from '@mui/material'
import SpaceDivider from '../../../components/Divider/SpaceDivider'
import Image from 'next/image'

export interface IInfoCardParam {
  icon: string
  hoverIcon: string
  title: string
  options: Array<string>
}

const InfoCard = (props: IInfoCardParam) => {
  const [iconShow, seticonShow] = useState<boolean>(true)

  return (
    <div className={style.infoCard}
      onMouseEnter={() => { seticonShow(prev => !prev) }}
      onMouseLeave={() => { seticonShow(prev => !prev) }}
    >

      <div className={style.iconContainer}>
        {
          iconShow
            ? <Image className={style.icon} src={props.icon} width={50} height={50} />
            : <Image className={style.hoverIcon} src={props.hoverIcon} width={50} height={50} />
        }
      </div>

      <Typography className={style.title} variant='h6' bold center>{props.title}</Typography>
      {
        props.options.map((option) => {
          return (
            <div>
              <Typography className={style.option} variant='subtitle' center>{option}</Typography>
              <Divider></Divider>
            </div>
          )
        })
      }
    </div>
  )
}

export default InfoCard
