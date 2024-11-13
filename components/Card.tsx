import React from 'react'
import { IconType } from 'react-icons'

interface CardTypes {
  Icon: IconType,
  title: string,
  desc: string,
  bgColor: string
  padd: string,
  textColor?: string
  titleColor?: string
  iconSize?: string
  iconColor?: string
}

const Card:React.FC<CardTypes> = (props) => {


  console.log(props)

  return (
    <section className={`${props.bgColor} ${props.padd} w-[300px] flex  flex-col p-7 rounded-md shadow-md h-[350px] border border-[#C0A9F2] border-opacity-45 max-sm:m-0`}>
        <props.Icon className={`${props.iconSize} ${props.iconColor}`}/>
        <h1 className={`font-[600] text-[30px] ${props.titleColor}`}>{props.title}</h1>
        <p className={`${props.textColor}`}>{props.desc}</p>
    </section>
  )
}

export default Card