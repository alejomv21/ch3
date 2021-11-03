import React from 'react'
import Navbars from '../componentes/Navbars'

const Publiclayout = ({children}) => {
    return (
        <div>
            <Navbars />
            este es mi public
            {children}
        </div>
    )
}

export default Publiclayout
