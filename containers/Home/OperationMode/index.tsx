import classNames from 'classnames'
import React, { useState } from 'react'
import Image from 'next/image'
import IconWithChildren from '../../../components/IconWithChildren'
import Typography from '../../../components/Typography'
import style from './index.module.scss'
import LinkButton from '../../Header/LinkButton'
import useI18n from '../../../i18n'

const langMap = {
  'en-US': {
    tab1: 'FT-MTF International Multilateral Clearing Mode (Exchange)',
    tab2: 'Comprehensive agency rebate model (small and medium-sized brokers)',
    tabContent1: 'FT-MTF draws on the operation model of top international exchanges (clearing center-operation center/clearing agency-IB brokerage/intermediary-customer), and adopts the method of "daily debt-free liquidation of institutional members", allowing the transformed brokerage clients to keep their original The customer extension marketing model provides more customer source channels.',
    tabContent2: `The comprehensive agent rebate system is a settlement rebate platform tailored for brokers. When investors successfully open an account and conduct foreign exchange, spot and other transactions through the agent's business channel, they can return the corresponding amount according to the transaction volume and the number of transactions. Commission.`,
    learnMore: 'learn more'
  },
  'zh-cn': {
    tab1: 'FT-MTF国际多边清算模式（交易所)',
    tab2: '综合代理返佣模式（中小经纪商)',
    tabContent1: 'FT-MTF借鉴顶级国际交易所运营模式（清算中心-运营中心/清算机构-IB经纪机构/居间-客户），采用“机构会员每日无负债清算”的方式，让转型的经纪商客户保留原来的拓客营销模式，提供更多的客户来源渠道。',
    tabContent2: '综合代理返佣系统是针对经纪商量身定制的结算返佣平台，通过代理商的业务渠道发展投资者开户成功并进行外汇、现货等交易时，可以根据交易量、交易次数等进行返还相应的佣金。',
    learnMore: '了解详情'
  }
}

const OperationMode = () => {
  const lang = useI18n(langMap)
  const [activeTabId, setactiveTabId] = useState<'mode1' | 'mode2'>('mode1')
  return (
    <div className={style.OperationMode}>
      <div className={style.SelectionTabs}>
        <IconWithChildren
          bgHoverInverse active={activeTabId === 'mode1'}
          onClick={() => setactiveTabId('mode1')}
          imgSrc='/icons/operationMode/mode1.png'
          imgSrcOnHover='/icons/operationMode/mode1_active.png'>
            {lang.tab1}
        </IconWithChildren>
        <IconWithChildren
          bgHoverInverse active={activeTabId === 'mode2'}
          onClick={() => setactiveTabId('mode2')}
          imgSrc='/icons/operationMode/mode2.png'
          imgSrcOnHover='/icons/operationMode/mode2_active.png'>
            {lang.tab2}
        </IconWithChildren>
      </div>
      <div className={style.TabContents}>
        <div className={classNames({
          [style.Content]: true,
          [style.hide]: activeTabId !== 'mode1'
        })}>
          <Typography className={style.description}>
            {lang.tabContent1}
          </Typography>
          <div className={style.ImgWrapper}><Image src='/imgs/operation-mode1.png' width={851} height={711} layout='responsive'/></div>
          <LinkButton href='/Operation'>{lang.learnMore}</LinkButton>
        </div>
        <div className={classNames({
          [style.Content]: true,
          [style.hide]: activeTabId !== 'mode2'
        })}>
          <Typography className={style.description}>
            {lang.tabContent2}
          </Typography>
          <div className={style.ImgWrapper}><Image src='/imgs/operation-mode2.png' width={758} height={494} layout='responsive'/></div>
        </div>
      </div>
    </div>
  )
}

export default OperationMode
