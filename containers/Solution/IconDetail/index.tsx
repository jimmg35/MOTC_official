import React, { useState } from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import Typography from '../../../components/Typography'

export interface IIconDetailParam {
  icon: string
  title: string
  description: string
  subDescription?: string
  mode: 'left' | 'right'
}

const IconDetail = (props: IIconDetailParam) => {
  return (
    <div className={style.iconDetail}>
      {
        props.mode === 'right' ? <div className={style.detailContainerRight}>
          <Typography variant='h6' bold>{props.title}</Typography>
          <Typography variant='subtitle'>{props.description}</Typography>
          <Typography variant='subtitle'>{props.subDescription ? props.subDescription : ''}</Typography>
        </div> : <></>
      }

      <div className={style.iconContainer}>
        <Image src={props.icon} width={60} height={60} />
      </div>

      {
        props.mode === 'left' ? <div className={style.detailContainerLeft}>
          <Typography variant='h6' bold>{props.title}</Typography>
          <Typography variant='subtitle'>{props.description}</Typography>
          <Typography variant='subtitle'>{props.subDescription ? props.subDescription : ''}</Typography>
        </div> : <></>
      }

    </div>
  )
}

export default IconDetail
