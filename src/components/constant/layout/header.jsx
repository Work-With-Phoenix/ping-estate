import * as React from 'react'
import Mobilenav from '../navigation/mobilenav'
import Webnav from '../navigation/webnav'


const Header = () => {
    return(
        <header>
            {/* web navbar */}
            <Webnav />
            {/* mobile navbar */}
            <Mobilenav />
        </header>
    )
}

export default Header