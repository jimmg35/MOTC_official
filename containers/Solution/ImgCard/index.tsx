import React, { useState } from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import Typography from '../../../components/Typography'

export interface IImgCardParam {
  title: string
  subTitle: string
  description: string
  img: string
}

const ImgCard = (props: IImgCardParam) => {
  return (
    <div className={style.ImgCard}>

      <div className={style.imgContainer}>

        <div className={style.imgText}>
          <Typography variant='h5'>{props.title}</Typography>
          <Typography variant='h6'>{props.subTitle}</Typography>
        </div>

        <Image
          src={props.img}
          width={342}
          height={190} />
      </div>

      <div className={style.description}>
        <Typography
          variant='subtitle'
        >{props.description}</Typography>
      </div>
    </div>
  )
}

export default ImgCard

{/* <div className={style.ImgCard}>
      <div className={style.imgContainer}>

        <Image
          src='/icons/ImgCard/bbg1.png'
          width={342}
          height={190} />

        <div className={style.description}>
          <Typography
            variant='subtitle'
          >基于微信/Facebook的推广分享，按业绩、级别进行返佣</Typography>
        </div>
        
      </div>

    </div> */}
