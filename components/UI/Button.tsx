import React, { ReactNode, FC } from 'react'

interface Props {
    children: ReactNode,
    type?: "primary" | "secondary",
    link?: string,
    clase?: string,
}
export const Button: FC<Props> = ({ children, type = "primary", link, clase }) => {
    return (
        <>
            {link != undefined ?
                < a href={link} className={`btn btn_${type} ${clase}`}>{children}</a >
                :
                <button className={`btn btn_${type} ${clase}`}>{children}</button>
            }
        </>
    )
}
