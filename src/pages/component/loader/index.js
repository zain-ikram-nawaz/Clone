import { robotofont } from "../../utils/font"
import { notofont } from "../../utils/font"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import RevealText from "../revealText"


import React from "react"

const Loader = (props) => {
    const tl = gsap.timeline({
        defaults: { ease: "power2.in" },
        ease: "bounce.out",
      });
      const container = useRef();
      useEffect(() => {
        tl.to(".port",{
          left : 0,
          duration : 1,
          opacity :1
            })
        tl.to(".web",{
          right : 0,
          duration : 1,
          opacity :1
            })
        tl.to("#fs", {
          top: "-100%",
          duration: 2,
          ease: "power2.in",
        });
        tl.to("#green", {
          duration: 2,
          delay: -2,
          height: "100%",
          ease: "power2.in",
        });
    
        tl.to("#red", {
          duration: 2,
          delay: -1.6,
          height: "100%",
          ease: "power2.in",
        });
        tl.to(".child", {
          top: 0,
          duration: 1,
          stagger: 1,
        });
    
        tl.to(".main-zain", {
         display : "none",
        
        });
        tl.to(".final", {
   height : "100vh",
   width : "100%",
   duration : 1
      

        
         });
      }, []);
     
    return (
        <div className="relative h-screen ">
          <div
            id="fs"
            className={`${robotofont} ${notofont}  bg-black text-white w-full absolute top-0 h-screen `}
            ref={container}
          >
            <div className="flex justify-center animate-bounce pt-4">
                <h1>logo</h1>
            </div>
            <main className="flex flex-col justify-center h-[100vh] items-center text-5xl">
              <h1 className="roboto relative left-60 opacity-0 uppercase  port">PORTFOLIO</h1>
              <h1 className="noto  relative right-60 opacity-0 uppercase web">
                WEB DEVELOPER
              </h1>
            </main>
     
          </div>
    
          <div
            id="green"
            className={`${robotofont} ${notofont} bg-zinc-600 absolute bottom-6 w-full h-0`}
          >
        
          </div>
          <div className="flex">
            <div
              id="red"
              className={`${robotofont} ${notofont} bg-zinc-200  absolute bottom-0 w-full h-0`}
            >
              <main className=" main-zain flex flex-col justify-center h-[100vh] items-center text-5xl">
                <h1 className="roboto  overflow-hidden zain">
                  <span className="parent ">
                    <span className="child relative top-12">ZAIN IKRAM </span>
                  </span>
                </h1>
                <h1 className="noto overflow-hidden">
                  <span className="parent">
                    <span className="child relative top-12">LET CONNECT</span>
                  </span>
                </h1>
              </main>
            </div>
          </div>
          <div className="final w-0 bg-emerald-700 absolute bottom-0  h-0 overflow-hidden">
          <RevealText />

          </div>
          <div className="relative">
            <div className="w-60 bg-slate-600 h-60">pp</div>
          </div>
        </div>
      );
};

export default Loader;
