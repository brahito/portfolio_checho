import React, { FC, ReactNode } from 'react'
import { Footer, Header } from '.'

interface Props {
    children: ReactNode
}
export const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
