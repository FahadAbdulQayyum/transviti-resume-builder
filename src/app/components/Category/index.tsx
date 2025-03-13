import React from 'react'

// Category component displays a list of similar job categories
const Category = () => {
    const Buttons = [
        {btnName: 'Frontend'},
        {btnName: 'Backend'},
        {btnName: 'Graphic Designer'},
    ] 
  return (
    <div className='flex items-center space-x-3 text-textClr3'>
        <p>Similar:</p>
        <div className='space-x-3'>
        {Buttons.map((v)=><>
        <button
        className='border border-textClr3 bg-transparent p-2 rounded-lg'
        >{v.btnName}</button>
        </>)}
        </div>
    </div>
  )
}

export default Category