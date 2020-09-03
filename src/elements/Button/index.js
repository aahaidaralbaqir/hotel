import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className]
  if(props.isPrimary) className.push("btn-primary")
  if(props.isLarge) className.push("btn-lg")
  if(props.isSmall) className.push("btn-sm")
  if(props.isBlock) className.push("btn-block")
  if(props.hashShadow) className.push("btn-shadow")

  if(props.isDisabled || props.isLoading)  {
    if(props.isDisabled) className.push("disabled")
    return (
      <span
        className={className.join(" ")} 
        stype={props.style} 
      >
          {
            props.isLoading ? <>
              <span className="spinner-border spinner-border-sm mx-5"></span>
              <span className="sr-only">Loading</span>
            </>
            : props.children
          }
      </span>
    )
  } 

  const onClick = () => {
    if(props.onClick) props.onClick()
  }

  if(props.type == "link") {
    if(props.isExternal) {
      return (
        <a 
          href={props.href} 
          className={className.join(" ")} 
          stype={props.style} 
          target={props.target == "_blank" ? "_blank" : undefined} 
        >
          {props.children} 
        </a>
      )
    }else {
      <Link
        to={props.href}
        className={className.join(" ")} 
        stype={props.style} 
        target={props.target == "_blank" ? "_blank" : undefined}
      >
        {props.children}
      </Link>
    }
  }

  return <button className={className.join(" ")} stype={props.style}>
    {props.children}
  </button>
}

Button.propTypes = {
  type: propTypes.oneOf(["button","link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  isDisabled: propTypes.bool,
  href: propTypes.string,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isExternal: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool
}