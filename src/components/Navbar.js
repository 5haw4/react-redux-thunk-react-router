import React, { useState } from 'react'

import Flexbox from './Flexbox'
import Link from './Link'

export default function Navbar() {
    //for the dynamic link - to change it on every click
    const [dynamicLink, setDynamicLink] = useState(new Date().getTime())
    
    return (
        <div id="navbar">
            <Flexbox
                leftItems={[
                    <Link href="/" style={{margin: 0}}>
                        <h1 style={{margin: 0}}>Logo</h1>
                    </Link>
                ]}
                rightItems={[
                    <Link href={`/dynamic/${dynamicLink}`} 
                        onClick={() => setDynamicLink(new Date().getTime())}>
                            Dynamic Link
                    </Link>,
                    <Link href="https://reactjs.org">External Link</Link>
                ]}
            />
        </div>
    )
}

