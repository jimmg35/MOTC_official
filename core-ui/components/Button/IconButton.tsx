// import classNames from 'classnames'
import React from 'react'
import Icon from '../../Icons'
import { IIconProps } from '../../Icons/Icon'
import Button, { IButtonProps } from './Button'

export interface IIconButtonProps extends IIconProps, IButtonProps {

}

const IconButton = (props: IIconButtonProps) => {
  // const {
  //   size = 'md',
  //   light
  // } = props
  // return (
  //   <div className={classNames({
  //     'cui-icon-button': true,
  //     light,
  //     sm: size === 'sm',
  //     md: size === 'md',
  //     larg: size === 'larg',
  //     xsm: size === 'xsm'
  //   })}>
  //     <Icon {...props} light={false}/>
  //   </div>
  // )
  return (
    <div className="cui-icon-button">
      <Button {...props} startIcon={<Icon {...props} />} />
    </div>
  )
}

export default IconButton
