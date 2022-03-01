import type { NextPage } from 'next'
import Head from 'next/head'
import IntervalKanban from '../components/Kanban/IntervalKanban'
import useI18n from '../i18n'
import style from './index.module.scss'
import { Button } from '@mui/material'

const langMap = {
  'en-US': {
  },
  'zh-cn': {
  }
}

const Home: NextPage = () => {
  const lang = useI18n(langMap)
  const redirectToSystem = () => {
    location.href = "http://140.122.82.98:84"
  }
  return (
    <>
      <Head>
        <title>MOTC2.0 - 移動空品物聯網</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        <meta name="description" content="MOTC2.0移動空品物聯網" />
        <meta property="og:title" content="MOTC2.0移動空品物聯網" />
        <meta property="og:description" content="MOTC2.0移動空品物聯網" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.mainPage}>

      </div>
      <div className={style.mainPageSide}>
        <div className={style.textArea}>
          <div className={style.textContainer}>
            <p className={style.text}>歡迎加入MOTC2.0</p>
            <Button
              variant="outlined"
              className={style.signBtn}
              onClick={redirectToSystem}
            >進入系統 →</Button>
            <p className={style.copyright}>Copyright © IADC 2022.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
