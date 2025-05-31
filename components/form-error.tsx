import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

interface Props {
    message?: string;
}
const FormError = ({message} : Props) => {
    if(!message) return null;
  return (
    <div className=' bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-md font-thin text-destructive'>
        <IoWarningOutline size={24}/>
        <p>{message}</p>
    </div>
  )
}

export default FormError;