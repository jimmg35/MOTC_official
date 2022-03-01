import React from 'react'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import style from './index.module.scss'
import MyHeader from '../containers/MyHeader'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({
  children
}: ILayoutProps) => {
  return (
    <>
      <div className={style.webSite}>
        {/* <Header /> */}
        <MyHeader />
        {children}
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Layout
