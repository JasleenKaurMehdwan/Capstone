 import './Navbar.css'
import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
    const drawGrid=ctx=>{
    
    ctx.width  = 500;
    ctx.height = 500;

for (let x=0;x<=300;x+=20) {
        for (let y=0;y<=300;y+=10) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 300);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(300, y);
            ctx.stroke();
        }
    }

    }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const render = () => {
        <canvas draw={drawGrid}> </canvas>
     drawGrid(context)
    }
    render()
  }, [drawGrid])
  
   
  return <canvas id="canvas" ref={canvasRef} {...props}/>
}

export default Canvas

 