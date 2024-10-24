import React from 'react'

const Button = ({className,btnText}) => {
  return (
        <button className={` font-open text-[18px] font-semibold ${className}`}>
        {btnText}
      </button>
  )
}

export default Button
