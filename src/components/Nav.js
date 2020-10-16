import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3, gsap } from "gsap";

function Nav() {
    const navStyle = {
        color: "#D72323",
        textDecoration: "none",
    };

    let mobileNav = useRef(null);
    let recA = useRef(null);
    let recB = useRef(null);
    let recC = useRef(null);
    let [toggleCross, setToggleCross] = useState(false);
    let crossAnim = gsap.timeline({ paused: true, duration: 0.3, delay: -1 });

    const animationMobileNav = () => {
        crossAnim.play();
        if (toggleCross) {
            TweenMax.to(mobileNav, 0.5, { width: "70%", ease: Power3.easeInOut });
            crossAnim.to(recA, {
                css: { transform: "translateY(0)" },
                ease: Power3.easeInOut,
            });
            crossAnim.to(
                recC, {
                    css: { transform: "translateY(0)" },
                    ease: Power3.easeInOut,
                },
                "-=.5"
            );
            crossAnim.set(recB, { opacity: 0 });
            crossAnim.to(recA, {
                css: { transform: "rotate(45deg)" },
                ease: Power3.easeInOut,
            });
            crossAnim.to(
                recC, {
                    css: { transform: "rotate(-45deg)" },
                    ease: Power3.easeInOut,
                },
                "-=.5"
            );
        } else {
            TweenMax.to(mobileNav, 0.5, { width: 0, ease: Power3.easeInOut });
            crossAnim.to(recA, {
                css: { transform: "translateY(-250%)" },
                ease: Power3.easeInOut,
            });
            crossAnim.to(
                recC, {
                    css: { transform: "translateY(250%)" },
                    ease: Power3.easeInOut,
                },
                "-=.5"
            );
            crossAnim.to(recB, { opacity: 1 }, "-=.3");
        }
        setToggleCross(!toggleCross);
    };

    return ( <
        nav >
        <
        div className = "container" >
        <
        Link style = { navStyle }
        to = "/" >
        <
        div className = "logo" > YummyZ < /div> < /
        Link > <
        ul >
        <
        li >
        <
        Link style = { navStyle }
        to = "/cuisine" >
        <
        div className = "link" > Cuisine < /div> < /
        Link > <
        /li> < /
        ul > <
        div className = "cross"
        onClick = { animationMobileNav } >
        <
        div ref = {
            (el) => (recA = el)
        }
        className = "rec a" > < /div> <
        div ref = {
            (el) => (recB = el)
        }
        className = "rec b" > < /div> <
        div ref = {
            (el) => (recC = el)
        }
        className = "rec c" > < /div> < /
        div > <
        /div> <
        div ref = {
            (el) => (mobileNav = el)
        }
        className = "mobile-nav" >
        <
        ul >
        <
        li >
        <
        Link style = { navStyle }
        to = "/" >
        <
        div className = "link" > Home < /div> < /
        Link > <
        /li> <
        li >
        <
        Link style = { navStyle }
        to = "/cuisine" >
        <
        div className = "link" > Cuisine < /div> < /
        Link > <
        /li> < /
        ul > <
        /div> < /
        nav >
    );
}

export default Nav;