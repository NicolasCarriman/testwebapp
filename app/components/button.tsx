import React from 'react'
import type { IconType } from 'react-icons';
import { AiOutlineLoading } from 'react-icons/ai';

interface Props extends React.ComponentProps<'button'> {
    isLoading?: boolean
    icon?: React.ReactNode
}

function ButtonComponent({ className, icon, isLoading, children, disabled, ...rest }: Props) {
    return (
        <button
            disabled={isLoading || disabled}
            className={`${(isLoading || disabled) ? "bg-gray-50 text-black" : "bg-gray-900 text-white"} p-2 gap-2 cursor-pointer rounded-sm min-w-20 flex flex-row items-center justify-center hover:bg-gray-50 hover:text-black transition-all duration-250 ease-in ${className ? className : ''}`}
            {...rest}
        >

            {
                isLoading ? <AiOutlineLoading className='animate-spin' /> :
                    <>
                        {
                            icon ? icon : null
                        }
                        {
                            children
                        }
                    </>
            }
        </button>
    )
}

export default ButtonComponent;