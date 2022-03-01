import React from 'react'
import useI18n from '../../i18n'
import AboutCard, { IAboutCardProps } from './AboutCard'
import Divider from '../../components/Divider'
import style from './index.module.scss'


const LangMap = {
  'en-US': {
    home: 'home',
    product: {
      name: 'Product',
      broker: 'Broker/Agent Solutions',
      trader: 'Trader Solutions',
      feed: 'Feed solution',
      dealer: 'Dealer solutions',
      clearing: 'Clearing House Solutions'
    },
    solution: {
      name: 'Solution',
      solution: 'solution',
    },
    service: {
      name: 'Service',
      service: 'service'
    },
    news: 'News',
    about: {
      name: 'About',
      about: 'about us',
      contact: 'contact us'
    },
    contact: 'Contact'
  },
  'zh-cn': {
    home: '首页',
    product: {
      name: '产品',
      broker: '经纪商/代理解决方案',
      trader: '交易者解决方案',
      feed: '国际专线数据源解决方案',
      dealer: '风控管理解决方案',
      clearing: '清算中心解决方案'
    },
    solution: {
      name: '解决方案',
      solution: '解决方案'
    },
    service: {
      name: '服务体系',
      service: '服务体系'
    },
    news: '最新消息',
    about: {
      name: '关于我们',
      about: '关于我们',
      contact: '联系我们'
    },
    contact: '联系我们'
  }
}

const Footer = () => {
  const lang = useI18n(LangMap)
  const aboutCardInfo: IAboutCardProps = {
    title: lang.about.name,
    links: [
      { name: lang.about.about, to: '/About' },
      { name: lang.about.contact, to: '/Contact' },
    ]
  }

  const productCardInfo: IAboutCardProps = {
    title: lang.product.name,
    links: [
      { name: lang.product.broker, to: '/Product' },
      { name: lang.product.trader, to: '/Product/Trader' },
      { name: lang.product.feed, to: '/Product/Feed' },
      { name: lang.product.dealer, to: '/Product/Dealer' },
      { name: lang.product.clearing, to: '/Product/Clearing' },
    ]
  }

  const solutionCardInfo: IAboutCardProps = {
    title: lang.solution.name,
    links: [
      { name: lang.solution.solution, to: '/Solution' }
    ]
  }

  const serviceCardInfo: IAboutCardProps = {
    title: lang.service.name,
    links: [
      { name: lang.service.service, to: '/Service' }
    ]
  }
  return (
    <footer className={style.footer}>
      <Divider/>
      <span className={style.group}>
        <AboutCard {...aboutCardInfo}/>
        <AboutCard {...productCardInfo}/>
        <AboutCard {...solutionCardInfo}/>
        <AboutCard {...serviceCardInfo}/>
      </span>
      <Divider/>
        <p className={style.credit}>Copyright © 2022 亚洲成果科技 版权所有</p>
    </footer>
  )
}

export default Footer