import React from 'react'
import s from './Button.module.css'

const Button: React.FC<ButtonPropsType> = ({title, className, ...restProps}) => {


    const fullClassName = `${s.default_button} ${className}`

    return (
        <button className={fullClassName} {...restProps}>{title}</button>
    )
}

export default Button

type DefaultButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    title: string
}