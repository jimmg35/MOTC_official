import classNames from 'classnames'
import React, { MouseEvent, useRef, useState } from 'react'
import { IPropsWithChildren, IPropsWithSize } from '../../utils/cui-ui-interface'

export interface IButtonProps extends IPropsWithChildren, IPropsWithSize {
  varient?: 'flat' | 'primary' | 'accent'
  outline?: boolean,
  borderEffect?: boolean,
  bbEfect?: boolean,
  disabled?: boolean,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  onClick?: (even: MouseEvent) => void
}

const Button = ({
  varient = 'primary',
  size = 'sm',
  outline = false,
  borderEffect = false,
  bbEfect = false,
  children,
  onClick,
  disabled,
  startIcon,
  endIcon
}: IButtonProps) => {
  const rippleRef = useRef<HTMLSpanElement>(null)
  const [rippleEffect, setrippleEffect] = useState(false)

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const btn = event.currentTarget;
    const circle = rippleRef.current
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    if (circle) {
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
      circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
      circle.classList.add("ripple");
    }

    if (onClick) {
      onClick(event)
    }
    setrippleEffect(true)
  }

  return (
    // <button className={classNames({
    //   'cui-button': true,
    //   outline,
    //   flat: varient === 'flat',
    //   primary: varient === 'primary',
    //   accent: varient === 'accent',
    //   sm: size === 'sm',
    //   md: size === 'md',
    //   larg: size === 'larg',
    //   xsm: size === 'xsm'
    // })} onClick={handleClick} disabled={disabled}>
    //   {startIcon}
    //   {
    //     children
    //       ? (
    //         <span className='cui-button-label'>{children}</span>
    //       )
    //       : null
    //   }
    //   {endIcon}
    // </button>
    <button className={classNames({
      'cui-button': true,
      outline: outline,
      flat: varient === 'flat',
      primary: varient === 'primary',
      accent: varient === 'accent',
      sm: size === 'sm',
      md: size === 'md',
      larg: size === 'larg',
      xsm: size === 'xsm',
      borderEffect,
      bbEfect
    })} onClick={handleClick} disabled={disabled}>
      <div className='line'></div> 
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className="contnet">
        {startIcon}
        {
          children
            ? (
              <div className='cui-button-label'>{children}</div>
            )
            : null
        }
        {endIcon}
        <span ref={rippleRef} className={classNames({
          ripple: rippleEffect
        })} onAnimationEnd={() => setrippleEffect(false)}></span>
      </div>
    </button>

  )
}
export default Button
