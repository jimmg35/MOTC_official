import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './index.module.scss'
import Typography from '../../components/Typography'
import useI18n from '../../i18n'

const langMap = {
  'en-US': {
    title: `As the world's top financial service provider, we look forward to your cooperation.`,
    content: 'We are ready to answer your questions and tell you more about our solutions.',
    contactUs: 'contact us'
  },
  'zh-cn': {
    title: '作为全球顶尖的金融系统服务商，期待您的合作和了解。',
    content: '我们准备解答您的疑问并且向您讲述更多关于我们解决方案的细节。',
    contactUs: '联系我们'
  }
}

const ContactMail = () => {
  const lang = useI18n(langMap)
  return (
    <div className={style.ContactMail}>
      <div className={style.contentLeft}>
        <Image src='/imgs/contactMail-deco.png' width={147} height={107} layout='fixed' />
        <Typography className={style.textContent} variant='h5' bold>{lang.title}</Typography>
        <Typography className={style.textContent}>{lang.content}</Typography>
      </div>
      <div className={style.contentRight}>
        <Image src='/imgs/contactMail.png' width={660} height={590} layout='responsive' />
        <div className={style.action}><Link href='/Contact'>{lang.contactUs}</Link></div>
      </div>
    </div>
  )
}

export default ContactMail
