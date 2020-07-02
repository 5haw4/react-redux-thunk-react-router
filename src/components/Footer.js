import React, { useState } from 'react'

import Flexbox from './Flexbox'
import Link from './Link'

export default function Footer() {
    const [dynamicLink, setDynamicLink] = useState(new Date().getTime())
    return (
        <div id="footer">
            <Flexbox 
                style={{height: "100%"}}
                leftItems={[`All right reseved goes here © ${new Date().getFullYear()}`]}
                rightItems={[
                    <Link href={`/dynamic/${dynamicLink}`} 
                        onClick={() => setDynamicLink(new Date().getTime())}>
                            Dynamic Link
                    </Link>,
                    <Link href="https://reactjs.org">ReactJS</Link>,
                    <Link href="https://github.com/ReactTraining/react-router">React Router</Link>,
                    <Link href="https://react-redux.js.org/">React Redux</Link>,
                ]}
            />
        </div>
    )
}
