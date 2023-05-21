import React from "react";
import spider00 from './spider0.svg';
import spider01 from './spider1.svg';
import spider02 from './spider2.svg';
import spider03 from './spider3.svg';
import spider04 from './spider4.svg';
import spider05 from './spider5.svg';
import spider06 from './spider6.svg';
import spider07 from './spider7.svg';
import spider08 from './spider8.svg';

const IMAGES = [
  spider00,
  spider01,
  spider02,
  spider03,
  spider04,
  spider05,
  spider06,
  spider07,
  spider08
];


type SpiderProps = {
    step ?: number;
}

function Spider({step = 0} : SpiderProps){
    const src = 
            step >= IMAGES.length ? IMAGES[IMAGES.length - 1] : IMAGES[step];

    return( <div className="Spider">
                <img alt="Spider" src={src}/>
            </div>
    );

}

export default Spider;