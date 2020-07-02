import React from 'react'
import { useParams } from 'react-router-dom'

import Link from '../components/Link'
import Flexbox from '../components/Flexbox'
import Container from '../components/Container'
import Counter from '../components/Counter'

export default function Dynamic() {
    const { id } = useParams()
    return (
        <Container>
            <h1>
                Dynamic Page
            </h1>
            <p>
                Dynamic ID that was extracted from the URL: {id}
            </p>
            <Flexbox centerItems={[
                <Link href="/">Homepage</Link>,
                <Link href="https://reactjs.org">External Link</Link>
            ]} />
            <Counter />
        </Container>
    )
}
