import React, { useState } from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import Typography from '../../../components/Typography'


export interface IRotateDetailParam {
}

const RotateDetail = (props: IRotateDetailParam) => {
  return (
    <div className={style.rotateDetail}>

      <div className={style.row1}>
        <div className={style.cusIconDetail1}>
          <div className={style.textArea1}>
            <Typography variant='h6' bold>{'电脑端'}</Typography>
            <Typography variant='subtitle'>{'PC端交易客户端'}</Typography>
            <Typography variant='subtitle'>{'PC会员管理系统'}</Typography>
          </div>
          <div className={style.iconContainer}>
            <Image src={'/icons/RotateDetail/ydjy_pro3.png'} width={60} height={60} />
          </div>
        </div>

        <div className={style.rotateImgContainer}>
          <Image src={'/icons/RotateDetail/ydjy_pro2.png'} width={198} height={183} />
        </div>

        <div className={style.cusIconDetail2}>
          <div className={style.iconContainer}>
            <Image src={'/icons/RotateDetail/pro59.png'} width={60} height={60} />
          </div>
          <div className={style.textArea2}>
            <Typography variant='h6' bold>{'Facebook'}</Typography>
            <Typography variant='subtitle'>{'在线开户'}</Typography>
            <Typography variant='subtitle'>{'随时交易'}</Typography>
          </div>
        </div>
      </div>

      <div className={style.row2}>

        <div className={style.cusIconDetail3}>
          <div className={style.iconContainer}>
            <Image src={'/icons/RotateDetail/pro5.png'} width={60} height={60} />
          </div>
          <div className={style.textArea3}>
            <Typography variant='h6' bold>{'手机APP端'}</Typography>
            <Typography variant='subtitle'>{'苹果版交易客户端'}</Typography>
            <Typography variant='subtitle'>{'安卓版交易客户端'}</Typography>
          </div>
        </div>

        <div className={style.cusIconDetail4}>
          <div className={style.iconContainer}>
            <Image src={'/icons/RotateDetail/ydjy_pro4.png'} width={60} height={60} />
          </div>
          <div className={style.textArea4}>
            <Typography variant='h6' bold>{'微信端'}</Typography>
            <Typography variant='subtitle'>{'微信开户'}</Typography>
            <Typography variant='subtitle'>{'微信交易'}</Typography>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RotateDetail
