import React,{useEffect} from "react"
import gsap from "gsap";

const RevealText = ( {text}) => {
    console.log(text)
    const tl = gsap.timeline()
    useEffect(()=>{
        tl.to(".child", {
            top: 0,
            duration: 1,
            stagger: 1,
          });
      
    },[])
  return (
    <div>
        <h1 className="roboto  overflow-hidden zain">
                  <span className="parent ">
                    <span className="child relative top-10 "> warna</span>
                  </span>
                </h1>
    </div>
  )
};

export default RevealText;
