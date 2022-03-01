import React from 'react'
import useSwitch from '../../../hooks/useSwitch'
import brokerImg from './icons/broker.png'
import traderImg from './icons/trader.jpg'
import feedImg from './icons/feed.jpg'
import dealerimg from './icons/dealer.jpg'
import clearingImg from './icons/clearing.jpeg'
import IconWithChildren from '../../../components/IconWithChildren'
import IntroContentCard from './IntroContentCard'
import useI18n from '../../../i18n'
import { map } from 'lodash'
import style from './ServiceIntro.module.scss'
import classNames from 'classnames'

type TabContent = {
  tab: {
    src: string,
    title: string,
    subTitle?: string
  }
}

const langMap = {
  'en-US': {
    more: 'more',
    broker: {
      title: 'BrokerSolution',
      subtitle: '',
      description: 'Provide brokers (exchanges) with business operations and operation management functions such as institutional, customer operation, business operation management, and business result analysis.'
    },
    trader: {
      title: 'TraderSolution',
      subtitle: '',
      description: 'Provide traders with online account opening, capital management, trading, training, copying and other business functions, and support trading clients for various systems of computers, mobile phones, and Pads.'
    },
    feed: {
      title: 'FeedSolution',
      subtitle: '',
      description: 'The introduction of international dedicated line data sources such as the London Precious Metals Exchange, the Tokyo Commodity Exchange, the Intercontinental Exchange, the Chicago Exchange, and the Shanghai Futures Exchange provides services 24 hours a day.'
    },
    dealer: {
      title: 'DealerSolution',
      subtitle: '',
      description: 'Provide a full range of risk control and management functions, identify risks through effective risk monitoring, and adopt effective measures such as avoiding risks, transferring risks, reducing losses, and taking risks.'
    },
    clearing: {
      title: 'ClearingSolution',
      subtitle: '',
      description: 'Carry out reasonable and scientific account settlement for various institutions, agents and customers in the trading platform ecosystem of brokers (exchanges).'
    },
    BrokerSolutionList: {
      '资金管理': { imgName: '资金管理', displayName: 'money management' },
      '客户管理': { imgName: '客户管理', displayName: 'customer management' },
      '视频直播经营': { imgName: '视频直播经营', displayName: 'Live video management' },
      '智能跟单经营': { imgName: '智能跟单经营', displayName: 'Smart documentary business' },
      '期权交易管理': { imgName: '期权交易管理', displayName: 'Options Trading Management' },
      'MTF交易管理': { imgName: 'MTF交易管理', displayName: 'MTF Management' },
      '外汇交易管理': { imgName: '外汇交易管理', displayName: 'Forex transaction management' },
      '经营分析': { imgName: '经营分析', displayName: 'Business Analysis' },
      '实时监控': { imgName: '实时监控', displayName: 'monitoring' },
      '机构管理': { imgName: '机构管理', displayName: 'Institutional management' },
      'CRM管理': { imgName: 'CRM管理', displayName: 'CRM management' },
      '推广活动经营': { imgName: '推广活动经营', displayName: 'Promotion activities' }
    },
    TraderSolutionList: [
      { imgName: 'PC交易端', displayName: 'PC trading platform' },
      { imgName: '账户管理', displayName: 'Account management' },
      { imgName: '视频直播', displayName: 'Live video' },
      { imgName: 'Web交易端', displayName: 'Web trading platform' },
      { imgName: '资金管理', displayName: 'money management' },
      { imgName: '智能跟单社区', displayName: 'Smart documentary community' },
      { imgName: 'Android交易端', displayName: 'Android trading platform' },
      { imgName: '报表管理', displayName: 'Report management' },
      { imgName: 'iOS交易端', displayName: 'IOS trading platform' },
      { imgName: '团队管理', displayName: 'team management' },
      { imgName: 'H5交易端', displayName: 'H5 trading platform' },
      { imgName: '信息管理', displayName: 'Information management' }
    ],
    FeedSolutionList: [
      { imgName: '外汇', displayName: 'foreign exchange' },
      { imgName: '贵金属', displayName: 'precious metal' },
      { imgName: '原油', displayName: 'crude' },
      { imgName: '股指', displayName: 'stock index' },
      { imgName: '现货', displayName: 'Spot goods' },
      { imgName: '数字货币', displayName: 'digital currency' }
    ],
    DealerSolutionList: [
      { imgName: '风险控制', displayName: 'risk control' },
      { imgName: '风控插件', displayName: 'Risk Control Plugin' },
      { imgName: '风控经营', displayName: 'Risk control management' },
      { imgName: '清算桥', displayName: 'clearing bridge' }
    ],
    ClearingSolutionList: [
      { imgName: '场外市场集中清算系统', displayName: 'OTC Market Centralized Clearing System' },
      { imgName: '国际智能多边清算系统', displayName: 'International Smart Multilateral Clearing System' }
    ]
  },
  'zh-cn': {
    more: '了解详情',
    broker: {
      title: 'BrokerSolution',
      subtitle: '经纪商/代理解决方案',
      description: '为经纪商（交易所）提供机构、客户运营以及业务经营管理、经营结果分析等经营业务、运营管理功能。'
    },
    trader: {
      title: 'TraderSolution',
      subtitle: '交易者解决方案',
      description: '为交易者提供在线开户、资金管理、交易、培训、跟单等业务功能，支持电脑、手机、Pad多种设备多种系统的交易客户端。'
    },
    feed: {
      title: 'FeedSolution',
      subtitle: '国际专线数据源解决方案',
      description: '引入伦敦贵金属交易所、东京商品交易所、洲际交易所、芝加哥交易所、上海期货交易所等国际专线数据源，全天24小时不间断地提供服务。'
    },
    dealer: {
      title: 'DealerSolution',
      subtitle: '风控管理解决方案',
      description: '提供全方位的风险控制管理功能，通过有效的风险监控，识别风险，采用规避风险、转移风险、降低损失、承担风险等有效措施。'
    },
    clearing: {
      title: 'ClearingSolution',
      subtitle: '清算中心解决方案',
      description: '为经纪商（交易所）的交易平台生态圈中各个机构、代理、客户进行合理、科学的账目清算。'
    },
    BrokerSolutionList: {
      '资金管理': { imgName: '资金管理', displayName: '资金管理' },
      '客户管理': { imgName: '客户管理', displayName: '客户管理' },
      '视频直播经营': { imgName: '视频直播经营', displayName: '视频直播经营' },
      '智能跟单经营': { imgName: '智能跟单经营', displayName: '智能跟单经营' },
      '期权交易管理': { imgName: '期权交易管理', displayName: '期权交易管理' },
      'MTF交易管理': { imgName: 'MTF交易管理', displayName: 'MTF交易管理' },
      '外汇交易管理': { imgName: '外汇交易管理', displayName: '外汇交易管理' },
      '经营分析': { imgName: '经营分析', displayName: '经营分析' },
      '实时监控': { imgName: '实时监控', displayName: '实时监控' },
      '机构管理': { imgName: '机构管理', displayName: '机构管理' },
      'CRM管理': { imgName: 'CRM管理', displayName: 'CRM管理' },
      '推广活动经营': { imgName: '推广活动经营', displayName: '推广活动经营' }
    },
    TraderSolutionList: [
      { imgName: 'PC交易端', displayName: 'PC交易端' },
      { imgName: '账户管理', displayName: '账户管理' },
      { imgName: '视频直播', displayName: '视频直播' },
      { imgName: 'Web交易端', displayName: 'Web交易端' },
      { imgName: '资金管理', displayName: '资金管理' },
      { imgName: '智能跟单社区', displayName: '智能跟单社区' },
      { imgName: 'Android交易端', displayName: 'Android交易端' },
      { imgName: '报表管理', displayName: '报表管理' },
      { imgName: 'iOS交易端', displayName: 'iOS交易端' },
      { imgName: '团队管理', displayName: '团队管理' },
      { imgName: 'H5交易端', displayName: 'H5交易端' },
      { imgName: '信息管理', displayName: '信息管理' }
    ],
    FeedSolutionList: [
      { imgName: '外汇', displayName: '外汇' },
      { imgName: '贵金属', displayName: '贵金属' },
      { imgName: '原油', displayName: '原油' },
      { imgName: '股指', displayName: '股指' },
      { imgName: '现货', displayName: '现货' },
      { imgName: '数字货币', displayName: '数字货币' },
    ],
    DealerSolutionList: [
      { imgName: '风险控制', displayName: '风险控制' },
      { imgName: '风控插件', displayName: '风控插件' },
      { imgName: '风控经营', displayName: '风控经营' },
      { imgName: '清算桥', displayName: '清算桥' }
    ],
    ClearingSolutionList: [
      { imgName: '场外市场集中清算系统', displayName: '场外市场集中清算系统' },
      { imgName: '国际智能多边清算系统', displayName: '国际智能多边清算系统' }
    ]
  }
}

const ServiceIntro = () => {
  const lang = useI18n(langMap)
  const switchItems: {
    id: 'broker' | 'trader' | 'feed' | 'dealer' | 'clearing',
    value: TabContent
  }[] = [
    {
      id: 'broker',
      value: {
        tab: { src: brokerImg.src, title: 'BrokerSolution' }
      }
    },
    {
      id: 'trader',
      value: {
        tab: { src: traderImg.src, title: 'TraderSolution' }
      }
    },
    {
      id: 'feed',
      value: {
        tab: { src: feedImg.src, title: 'FeedSolution' }
      }
    },
    {
      id: 'dealer',
      value: {
        tab: { src: dealerimg.src, title: 'DealerSolution' }
      }
    },
    {
      id: 'clearing',
      value: {
        tab: { src: clearingImg.src, title: 'ClearingSolution' }
      }
    }
  ]
  const { switchTo, currentId } = useSwitch<TabContent>(switchItems)
  return (
    <div className={style.ServiceIntro}>
      <div className={style.Tabs}>
        {
          switchItems.map((item, index) => (
            <IconWithChildren
              key={index}
              imgSrc={item.value.tab.src}
              size='xlg'
              direction='col'
              onClick={() => switchTo(item.id)}>
              {/* {item.value.tab.title} */}
              <div className={style.IconTitle}>
                <span>{lang[item.id].title}</span>
                <span className={style.subtitle}>{lang[item.id].subtitle}</span>
              </div>
            </IconWithChildren>
          ))
        }
      </div>
      <div className={style.Content}>
        {/* {currentValue.content} */}
        <div className={classNames({ [style.hide]: currentId !== 'broker' })}>
          <IntroContentCard
            detailWidth={150}
            title='Broker Solution'
            description={lang.broker.description}
            href='/Product'
            hrefName={lang.more}>
            <>
              {
                map(lang.BrokerSolutionList, (value, key) => (
                  <IconWithChildren
                    key={key} size='xsm' direction='row'
                    imgSrc={`/icons/broker/${value.imgName}.png`} imgSrcOnHover={`/icons/broker/${value.imgName}_active.png`}>
                    {value.displayName}
                  </IconWithChildren>
                ))
              }
            </>
          </IntroContentCard>
        </div>
        <div className={classNames({ [style.hide]: currentId !== 'trader' })}>
          <IntroContentCard
            detailWidth={150}
            title='Trader Solution'
            description={lang.trader.description}
            href='/Product/Trader'
            hrefName={lang.more}>
            <>
              {
                lang.TraderSolutionList.map((value, index) => (
                  <IconWithChildren
                    key={index} size='xsm' direction='row'
                    imgSrc={`/icons/trader/${value.imgName}.png`} imgSrcOnHover={`/icons/trader/${value.imgName}_active.png`}>
                    {value.displayName}
                  </IconWithChildren>
                ))
              }
            </>
          </IntroContentCard>
        </div>
        <div className={classNames({ [style.hide]: currentId !== 'feed' })}>
          <IntroContentCard
            detailWidth={170}
            title='Feed Solution'
            description={lang.feed.description}
            href='/Product/Feed'
            hrefName={lang.more}>
            <>
              {
                lang.FeedSolutionList.map((value, index) => (
                  <IconWithChildren
                    key={index} size='md' direction='row'
                    imgSrc={`/icons/feed/${value.imgName}.png`} imgSrcOnHover={`/icons/feed/${value.imgName}_active.png`}>
                    {value.displayName}
                  </IconWithChildren>
                ))
              }
            </>
          </IntroContentCard>
        </div>
        <div className={classNames({ [style.hide]: currentId !== 'dealer' })}>
          <IntroContentCard
            detailWidth={170}
            title='Dealer Solution'
            description={lang.dealer.description}
            href='/Product/Dealer'
            hrefName={lang.more}>
            <>
              {
                lang.DealerSolutionList.map((value, index) => (
                  <IconWithChildren
                    key={index} size='md' direction='row'
                    imgSrc={`/icons/dealer/${value.imgName}.png`} imgSrcOnHover={`/icons/dealer/${value.imgName}_active.png`}>
                    {value.displayName}
                  </IconWithChildren>
                ))
              }
            </>
          </IntroContentCard>
        </div>
        <div className={classNames({ [style.hide]: currentId !== 'clearing' })}>
          <IntroContentCard
            detailWidth={350}
            title='Clearing Solution'
            description={lang.clearing.description}
            href='/Product/Clearing'
            hrefName={lang.more}>
            <>
              {
                lang.ClearingSolutionList.map((value, index) => (
                  <IconWithChildren
                    key={index} size='md' direction='row'
                    imgSrc={`/icons/clearing/${value.imgName}.png`} imgSrcOnHover={`/icons/clearing/${value.imgName}_active.png`}>
                    {value.displayName}
                  </IconWithChildren>
                ))
              }
            </>
          </IntroContentCard>
        </div>
      </div>
    </div>
  )
}

export default ServiceIntro
