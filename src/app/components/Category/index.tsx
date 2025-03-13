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
        <div className='text-xs sm:text-base flex space-x-3'>
        {Buttons.map((v)=><>
        <button
        className='border border-textClr3 bg-transparent p-1 px-2 sm:px-4 rounded-md'
        >{v.btnName}</button>
        </>)}
        </div>
    </div>
  )
}

export default Category