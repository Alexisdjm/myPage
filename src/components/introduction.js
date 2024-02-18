import Typewriter from "typewriter-effect";

function first_look({glitchtext, bool, first, second, loop, align}) {

    return (
    <div id="intro" className='presentation-container' style={{justifyContent: align}}>
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

export default first_look