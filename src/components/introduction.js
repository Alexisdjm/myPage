import Typewriter from "typewriter-effect";
import { useState } from "react";

function First_look({glitchtext, bool, first, second, loop}) {

    const [animationSpeed, setAnimationSpeed] = useState(5); // 5 segundos es la duración por defecto

    const handleMouseDown = () => {
      setAnimationSpeed(2.5); // Cambia la duración a la mitad (doble velocidad)
    };
  
    const handleMouseUp = () => {
      setAnimationSpeed(5); // Vuelve a la duración normal
    };

    return (
    <div 
    id="intro" 
    className='presentation-container' 
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    style={{animationDuration: `${animationSpeed}s` }}>
        <div className="glitch-container">
            <div className="glitch" data-glitch={glitchtext}>{glitchtext}</div>
            <div className='my-title'>
            {bool && 
                <Typewriter options={{loop:loop}} onInit={(typewriter)=> {
                    typewriter.typeString(`${first}`).pauseFor(1000).deleteAll()
                    .typeString(`${second}`).start();
                }}/>
            }

            </div>
        </div>
    </div>
    )
}

export default First_look