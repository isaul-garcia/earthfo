import React from 'react';
import {Button} from '../../globalStyles';
import {FooterContainer, 
        FooterSubscription, 
        FooterSubHeading, 
        FooterSubText, 
        Form, 
        FormInput,} from './RecuerdoRegistro.elements';

const Recuerdo = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our email list to stay informed of events near you and monthly news.
                </FooterSubHeading>
                <FooterSubText></FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your email" />
                    <Button primary fontBig>Register</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Recuerdo
