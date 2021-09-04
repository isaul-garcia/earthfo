import React from 'react';
import {
    SliderSection,
    Slide,
    SliderImage,
} from './Slider.elements';

const Slider = ({ slides }) => {
    const [curr, setCurr] = React.useState(0);
    const { length } = slides;
  
    const goToNext = () => {
            setCurr(curr === length - 1 ? 0 : curr + 1);
        }
        
        React.useEffect(() => {
            setTimeout(goToNext, 2000)
        })
        
        if (!Array.isArray(slides) || length <= 0) {
            return null;
        }
    
    return (
        <>
            <SliderSection>
                {slides.map((s, i) => (
                    <Slide key={s.title}>
                    <div>
                        <h1>{s.title}</h1>
                        <h2>{s.subtitle}</h2>
                    </div>
                    {i === curr && (
                        <SliderImage src={s.image} alt="images"/>
                    )}
                    </Slide>
                ))}
            </SliderSection>
        </>
    )
}

export default Slider;
