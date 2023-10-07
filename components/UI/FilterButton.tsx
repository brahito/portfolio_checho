import React, { FC, ReactEventHandler } from 'react'

interface Props {
  text: string;
  setCategory: Function;
  current: string;
}
export const FilterButton: FC<Props> = ({ text, setCategory, current }) => {
  return (
    <button onClick={() => setCategory(text)} className={`filterButton ${text == current ? 'filterButton_active' : ''}`}>{text}</button>
  )
}
