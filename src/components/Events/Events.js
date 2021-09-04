import React from 'react';
import {
EventContainer,
EventContents,
ImgFill,
EventWrapper,
Headline,
Subtitle,
EventDetails,
EventsButton,
Date
} from './Events.elements';

const Events = (primary) => {
    return (
        <>
            <EventContainer>
                <EventWrapper>
                    <EventContents>
                        <ImgFill src={"https://imgr.search.brave.com/oF3EwxIAwrZ63KgCe0rx6EpWaiM4crNepVQdfKCuyMM/fit/1200/936/no/1/aHR0cHM6Ly9nMi5p/bWctZHByZXZpZXcu/Y29tL0RFRDE0NTI4/Qzg5OTRCOUZCRDBC/NjJGNDVGRkQwOTAx/LmpwZw"} />
                        <EventDetails>
                            <Headline>Gathering at Parque Forestal</Headline>
                            <Date>Thursday, April 19th 2021</Date>           
                            <Subtitle>Bring all your friends for a friendly gathering and iniciative networking.</Subtitle>
                            <EventsButton>Add to Calendar</EventsButton>
                        </EventDetails>
                    </EventContents>
                    <EventContents>
                        <ImgFill src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Parque_Bolivar-Medellin.JPG/1200px-Parque_Bolivar-Medellin.JPG"} />
                        <EventDetails>
                            <Headline>Gathering at Parque Bolivar</Headline>
                            <Date>Thursday, April 19th 2021</Date>                            
                            <Subtitle>Bring all your friends for a friendly gathering and iniciative networking.</Subtitle>
                            <EventsButton>Add to Calendar</EventsButton>                          
                        </EventDetails>
                    </EventContents>
                    <EventContents hide={true}>
                        <ImgFill src={"https://images.squarespace-cdn.com/content/v1/5c2bf01c5cfd792a157d48a6/1546384324707-SRE9AGNL1N9GH9PM7YUO/1+MO-DSC_5233.jpg?format=1500w"} />
                        <EventDetails>
                            <Headline>Gathering at Parque Luis Rivera</Headline>
                            <Date>Thursday, April 19th 2021</Date>                            
                            <Subtitle>Bring all your friends for a friendly gathering and iniciative networking.</Subtitle>
                            <EventsButton>Add to Calendar</EventsButton>                          
                        </EventDetails>
                    </EventContents>
                    <EventContents hide={true}>
                        <ImgFill src={"https://imgr.search.brave.com/BHP2Qi8Ma_kddW4MNG6JAnjbTchfVMhfkIogaLef538/fit/698/400/no/1/aHR0cDovL2dyZWF0/cnVucy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMTIv/UGFycXVlLVJpdmVy/YS5qcGc"} />
                        <EventDetails>
                            <Headline>Gathering at Pabellon de la Paz</Headline>
                            <Date>Thursday, April 19th 2021</Date>                            
                            <Subtitle>Bring all your friends for a friendly gathering and iniciative networking.</Subtitle>
                            <EventsButton>Add to Calendar</EventsButton>                          
                        </EventDetails>
                    </EventContents>
                </EventWrapper>
            </EventContainer>
        </>
    )
}

export default Events
