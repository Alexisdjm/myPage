import Typewriter from "typewriter-effect";
import { useState } from "react";

function First_look({glitchtext, bool, first, second, third, loop, align}) {

    const [animationSpeed, setAnimationSpeed] = useState(5);

    const handleMouseDown = () => {
      setAnimationSpeed(2.5);
    };
  
    const handleMouseUp = () => {
      setAnimationSpeed(5);
    };

    return (
    <div 
    id="intro" 
    className='presentation-container' 
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    style={{animationDuration: `${animationSpeed}s`, justifyContent: align}}>
        <div className="glitch-container">
            <div className="glitch" data-glitch={glitchtext}>{glitchtext}</div>
            <div className='my-title'>
            {bool && 
                <Typewriter options={{loop:loop}} onInit={(typewriter)=> {
                    typewriter.typeString(`${first}`).pauseFor(1000).deleteAll()
                    .typeString(`${second}`).pauseFor(1000).deleteAll()
                    .typeString(`${third}`).start();
                }}/>
            }

            </div>
        </div>
    </div>
    )
}

export default First_look