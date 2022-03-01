import classNames from 'classnames'
import React from 'react'
import style from './index.module.scss'

enum TypoVariant {
  h1, h2, h3, h4 ,h5, h6, subtitle, body, caption
}

export interface ITypographyProps {
  variant?: keyof typeof TypoVariant
  className?: string
  bold?: boolean
  center?: boolean
  children: React.ReactNode
}

const Typography = ({
  variant = 'body',
  className,
  bold = false,
  center = false,
  children
}: ITypographyProps) => {
  const ElementMap: { [k in keyof typeof TypoVariant]: JSX.Element } = {
    h1: (<h1 className={classNames({ [style.Typography]: true, [style.h1]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</h1>),
    h2: (<h2 className={classNames({ [style.Typography]: true, [style.h2]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</h2>),
    h3: (<h3 className={classNames({ [style.Typography]: true, [style.h3]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</h3>),
    h4: (<h4 className={classNames({ [style.Typography]: true, [style.h4]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</h4>),
    h5: (<h5 className={classNames({ [style.Typography]: true, [style.h5]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</h5>),
    h6: (<h6 className={classNames({ [style.Typography]: true, [style.h6]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</h6>),
    subtitle: (<p className={classNames({ [style.Typography]: true, [style.subtitle]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</p>), 
    body: (<p className={classNames({ [style.Typography]: true, [style.body]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</p>),
    caption: (<p className={classNames({ [style.Typography]: true, [style.caption]: true, [style.bold]: bold, [style.center]: center }) + ' ' + className}>{children}</p>)
  }
  return ElementMap[variant]
}

export default Typography
