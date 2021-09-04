import React from 'react';
import { VictoryChart, VictoryStack, VictoryArea } from 'victory';
import {
StatsContainer,
StatsContents,
StatsWrapper,
Headline,
Subtitle,
} from './Statistics.elements';

const Statistics = () => {
    return (
        <>
            <StatsContainer>
                <StatsWrapper>
                    <StatsContents>
                        <VictoryChart
                            events={[{
                                childName: ["area-1", "area-2"],
                                target: "data",
                            }]}
                            >
                            <VictoryStack animate={{
                            duration: 1500,
                            onEnter: { duration: 500 }
                            }}>
                            
                            <VictoryArea colorScale={["#24db5c"]}
                                data={[{x: "2017", y: 200}, {x: "2018", y: 300}, {x: "2019", y: 500}, {x: "2020", y: 200}]}
                            />
                            <VictoryArea colorScale={["#c900e1"]}
                                data={[{x: "2017", y: 100}, {x: "2018", y: 200}, {x: "2019", y: 800}, {x: "2020", y: 900}]}
                            />
                            <VictoryArea colorScale={["#0061e1"]}
                                data={[{x: "2017", y: 300}, {x: "2018", y: 200}, {x: "2019", y: 600}, {x: "2020", y: 400}]}
                            />
                            </VictoryStack>
                        </VictoryChart>
                    </StatsContents>
                    <StatsContents>
                        <Headline>Despite a recorded decrease in emissions, there is still much more work we have to do to repair the damage already done.</Headline>
                        <Subtitle>Due to the pandemic, there was a global record of lower carbon emissions. This is good news and bad news. Hopefully we can mantain the decline, otherwise we might just go back to the increase. The work is not done.</Subtitle>
                    </StatsContents>
                </StatsWrapper>
            </StatsContainer>
        </>
    )
}

export default Statistics
