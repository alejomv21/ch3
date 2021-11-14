import React from 'react'
import PrivateRoutes from '../componentes/PrivateRoutes'

const Privatelayout = ({children}) => {
    return (
        <PrivateRoutes>
            <div>
            este es mi private route
            {children}
            </div>
        </PrivateRoutes>
    )
}

export default Privatelayout
