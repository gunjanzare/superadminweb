import React from 'react';
import TabLogo from '../../assets/images/tab.png'

export function TabItem(props: any) {
    return (<div className='flex border rounded-md border-gray-600 justify-between w-60 m-2 p-2'>
        <h2 className='text-black'>{props.tabname}</h2>
        <img alt='Tab Logo' width={20} height={20} src={TabLogo} />
    </div>);
}