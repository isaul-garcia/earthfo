import React from 'react';
import "../../styles.css"
import {AiOutlineArrowDown} from 'react-icons/ai';
import {
    WelcomeSection,  
    WelcomeSubHeading,
    WelcomeSubText,
    DimmingBlack,
    ImgInfo,
    ArrowIcon,
} from './WelcomeSection.elements';

const backDrop =[
    {
        title: 'Happy Earth Day!',
        subtitle: "This week, we celebrate a happy Mother Earth and most importantly make notice of what's hurting her.",
        image: 'https://sm.mashable.com/mashable_in/image/default/uploads252fcard252fimage252f1544055252f15a40f44-eee9-4926-af_rp4f.jpg',
    },
    {
        title: "Summer Flocks",
        subtitle: "Photographer Benny Diaz gives us a look at the young shorebirds.",
        image: "https://i.imgur.com/6k13mvm.jpg"
    },
    {
        title: "Amazonia on fire",
        subtitle: "Fires in the Amazonas could get worse.",
        image: "https://miro.medium.com/max/3840/1*CrwrNJqv3ypn20yURYEz0Q.jpeg"
    },
];

const Welcome = () => {
    const [curr, setCurr] = React.useState(0);
    const { length } = backDrop;
  
    const goToNext = () => {
            setCurr(curr === length - 1 ? 0 : curr + 1);
        }

        React.useEffect(() => {
            setTimeout(goToNext, 8000)
        })
        
        if (!Array.isArray(backDrop) || length <= 0) {
            return null;
        }    

    return (
        <>
            <WelcomeSection>
                {backDrop.map((s, i) => (
                    <div className={i === curr ? "slide active" : "slide"} key={s.title}>
                    <div className="text">
                        <WelcomeSubHeading>
                            {s.title}
                        </WelcomeSubHeading>
                        <WelcomeSubText>
                            {s.subtitle}
                        </WelcomeSubText>
                    </div>
                    {i === curr && (
                        <img className="image" src={s.image} alt="images"/>
                    )}
                    <ArrowIcon>
                        <AiOutlineArrowDown />
                    </ArrowIcon>
                    <DimmingBlack><ImgInfo>Image Credits</ImgInfo></DimmingBlack>
                    </div>
                ))}
            </WelcomeSection>
        </>
    )
}

export default Welcome;
