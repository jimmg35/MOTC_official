import React, { useState } from 'react'
import LinkButton from './LinkButton'
import HoverableLink from './HoverableLink'
import style from './index.module.scss'
import useI18n from '../../i18n'
import LinkContent from '../../components/LinkContent'
import LanguageSelect from '../LanguageSelect'
import MenuDrawer from './MenuDrawer'
import AboutCard from '../Footer/AboutCard'
import { Button } from '../../core-ui/components/Button'
import Icon from '../../core-ui/Icons'

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

const Header = () => {
  const content = useI18n(LangMap)
  const [hideMenuDrawer, sethideMenuDrawer] = useState(true)
  return (
    <header className={style.headerRoot}>
      <span className={style.logo}>亚洲成果科技</span>
      <div className={style.mainLink}>
        <LinkButton href="/">{content.home}</LinkButton>
        <HoverableLink href="/Product" text={content.product.name}>
          <>
            <LinkContent href="/Product" >{content.product.broker}</LinkContent>
            <LinkContent href="/Product/Trader" >{content.product.trader}</LinkContent>
            <LinkContent href="/Product/Feed" >{content.product.feed}</LinkContent>
            <LinkContent href="/Product/Dealer" >{content.product.dealer}</LinkContent>
            <LinkContent href="/Product/Clearing" >{content.product.clearing}</LinkContent>
          </>
        </HoverableLink>
        <LinkButton href="/Solution">{content.solution.name}</LinkButton>
        <LinkButton href="/Service">{content.service.name}</LinkButton>
        <LinkButton href="/News">{content.news}</LinkButton>
        <LinkButton href="/About">{content.about.name}</LinkButton>
      </div>
      <div className={style.endLink}>
        <LinkButton href="/Contact">{content.contact}</LinkButton>
        <LanguageSelect />
      </div>
      {
        hideMenuDrawer ? null : <div className={style.blocker}></div>
      }
      <div className={style.menuButton}><Button outline onClick={() => sethideMenuDrawer(false)}><Icon type='menu' /></Button></div>
      <MenuDrawer hide={hideMenuDrawer} onClose={() => sethideMenuDrawer(true)}>
        <LanguageSelect />
        <AboutCard className={style.menuItem} noWrap title={content.home} links={[{ name: content.home, to: '/' }]} />
        <AboutCard className={style.menuItem} noWrap title={content.about.name} links={[{ name: content.about.about, to: '/About' }]} />
        <AboutCard
          className={style.menuItem}
          noWrap
          title={content.product.name}
          links={[
            { name: content.product.broker, to: '/Product' },
            { name: content.product.trader, to: '/Product/Trader' },
            { name: content.product.feed, to: '/Product/Feed' },
            { name: content.product.dealer, to: '/Product/Dealer' },
            { name: content.product.clearing, to: '/Product/Clearing' }
          ]} />
        <AboutCard className={style.menuItem} noWrap title={content.solution.name} links={[{ name: content.solution.solution, to: '/Solution' }]} />
        <AboutCard className={style.menuItem} noWrap title={content.service.name} links={[{ name: content.service.service, to: '/Service' }]} />
        <AboutCard className={style.menuItem} noWrap title={content.news} links={[{ name: content.news, to: '/News' }]} />
        <AboutCard className={style.menuItem} noWrap title={content.contact} links={[{ name: content.contact, to: '/Contact' }]} />
      </MenuDrawer>
    </header>
  )
}

export default Header
