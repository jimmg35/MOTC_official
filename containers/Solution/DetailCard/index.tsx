import React, { useState } from 'react'
import style from './index.module.scss'
import Typography from '../../../components/Typography'
import Image from 'next/image'
import { Divider } from '@mui/material'

export interface IDetailCardParam {
  icon: string
  title: string
  titleEng: string
  contents: Array<string>
}

const DetailCard = (props: IDetailCardParam) => {
  return (
    <div className={style.detailCard}>
      <div className={style.titleSection}>
        <div className={style.iconContainer}>
          <Image className={style.icon} src={props.icon} width={36} height={36} />
        </div>

        <div className={style.title}>
          <Typography className={style.main} variant='subtitle'>{props.title}</Typography>
          <p className={style.sub}>{props.titleEng}</p>
          <Divider></Divider>
        </div>
      </div>

      {
        props.contents.map((content) => {
          // return <Typography variant='subtitle'>○{content}</Typography> 
          return <p className={style.contentText} >·   {content}</p>
        })
      }
    </div>
  )
}

export default DetailCard
