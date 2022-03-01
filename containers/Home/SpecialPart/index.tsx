import React from 'react'
import style from './index.module.scss'
import ReadMoreAnimationCard from '../../../components/ReadMoreAnimationCard'
import IconWithChildren from '../../../components/IconWithChildren'
import useI18n from '../../../i18n'

const langMap = {
  'en-US': {
    title: '全球300+顶级经纪商的共同选择',
    more: '查看详情',
    safer: {
      title: 'safer',
      description: 'The server is 100% deployed overseas, supports cross-border payment, virtual currency payment, and fundamentally ensures the security of customer information and funds.'
    },
    stabler: {
      title: 'more stable',
      description: '14 years of deep cultivation in the field of financial technology, with very rich service experience, a strong technical operation and maintenance team provides service support 7*24 hours.'
    },
    morEefficient: {
      title: 'more efficient',
      description: 'Mature architecture, complete set-up within 7 working days; the system can process millions of orders per second, while satisfying hundreds of thousands of customers for daily debt-free settlement'
    }
  },
  'zh-cn': {
    title: '全球300+顶级经纪商的共同选择',
    more: '查看详情',
    safer: {
      title: '更安全',
      description: '服务器100%海外部署，支持跨境支付，虚拟币支付，从根本上保证客户信息和资金的安全。'
    },
    stabler: {
      title: '更稳定',
      description: '14年深耕金融科技领域，拥有非常丰富的服务经验，强大的技术运维团队7*24小时提供服务支持。'
    },
    morEefficient: {
      title: '更高效',
      description: '成熟的架构，7个工作日完成全套搭建；系统可实现每秒处理百万订单，同时满足数十万客户每日无负债结算'
    }
  }
}

const SpecialPart = () => {
  const lang = useI18n(langMap)
  return (
    <div className={style.SpecialPart}>
      <ReadMoreAnimationCard
        imgSrc='/imgs/specialPart-1.png'
        shownChild={
          <IconWithChildren imgSrc='/icons/dealer/风险控制_active.png' direction='col' size='lg'>
            <span className={style.Title}>{lang.safer.title}</span>
          </IconWithChildren>
        }
        hiddenChild={
          <div className={style.HiddenChild}>
            <p>{lang.safer.description}</p>
          </div>
        }/>

      <ReadMoreAnimationCard
        imgSrc='/imgs/specialPart-2.png'
        shownChild={
          <IconWithChildren imgSrc='/icons/dealer/风险控制_active.png' direction='col' size='lg'>
            <span className={style.Title}>{lang.stabler.title}</span>
          </IconWithChildren>
        }
        hiddenChild={
          <div className={style.HiddenChild}>
            <p>{lang.stabler.description}</p>
          </div>
        }/>

      <ReadMoreAnimationCard
        imgSrc='/imgs/specialPart-3.png'
        shownChild={
          <IconWithChildren imgSrc='/icons/dealer/风险控制_active.png' direction='col' size='lg'>
            <span className={style.Title}>{lang.morEefficient.title}</span>
          </IconWithChildren>
        }
        hiddenChild={
          <div className={style.HiddenChild}>
            <p>{lang.morEefficient.description}</p>
          </div>
        }/>
    </div>
  )
}

export default SpecialPart
