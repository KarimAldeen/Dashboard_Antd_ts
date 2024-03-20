import React from 'react'
import { ErrorImage } from '../Layout/app/Const';

const useImageError = ({currentTarget}:any) => {
    currentTarget.onerror = null;
    currentTarget.src=`${ErrorImage}`;
}

export default useImageError