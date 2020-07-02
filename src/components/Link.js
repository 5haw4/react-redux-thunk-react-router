import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

export default function MyLink(props) {
    const isReactRouterLink = props.href.startsWith('/');
    const DynamicLink = isReactRouterLink ? Link : 'a';
    props = isReactRouterLink ? 
        {...props, to: props.href} : 
        {target: "_blank", rel: "noopener noreferrer", ...props}
    return (
        <DynamicLink {...props} style={{margin: "auto 5px", ...props.style}} >
            {props.children}
            {!isReactRouterLink && <FaExternalLinkAlt style={{margin: "auto auto -2px 2.5px"}} />}
        </DynamicLink>
    )
}
