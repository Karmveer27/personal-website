import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
//import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
//import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 5,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 5,
        duration: 1.5,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path  ref={outlineLogoRef} d="M 240.40625 0 L 178.40625 0 L 87.59375 -128.796875 L 87.59375 0 L 32.796875 0 L 32.796875 -287.203125 L 87.59375 -287.203125 L 87.59375 -175.203125 L 170.40625 -287.203125 L 232 -287.203125 L 132 -152.796875 Z M 240.40625 0 "/>
        </g>
      </svg>
    </div>
  )
}

export default Logo