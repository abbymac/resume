import styled from 'styled-components';
import { Grid } from '@mui/material';

import Spacer from '../atoms/Spacer';
import {NavItems} from '../../constants/NavItems';

const AboutContainer = styled(Grid)`
    flex-direction: row !important;
    width: 90% !important;
    margin: auto;
`
const TextContainer = styled(Grid)`
    flex-grow: 2
`

const MenuContainer = styled(Grid)`
    flex-direction: column;
`

const MenuItem = styled(Grid)`
    margin-top: 5px;
`

const AboutSection = () => {

    return (
        <>
            <Spacer size={2} />
            <AboutContainer container>
                {/* <MenuContainer item xs={3}>
                    <MenuItem item>
                        ok
                    </MenuItem>
                </MenuContainer> */}
                <TextContainer item xs={12}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nula, lobortis id fringilla quis, rhoncus a quam. Nulla commodo, lacus vel placerat aliquam, velit quam mollis lacus, gravida iaculis eros orci sit amet augue. Sed semper ac lectus sed dapibus. Duis non tortor arcu. Aeneui. Nunc mollis arcu sed tortor laoreet eleifend. Phasellus id justo laoreet, pulvinar est mattis, sodales mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget augue cursus, vulputate velit ut, rhoncus eros. Nullam rhoncus id nulla non rhoncus. Donec molestie lorem vel varius condimentum. Phasellus at condimentum erat. Praesent eu ullamcorper elit. Fusce tempor neque neque, commodo mattis sapien finibus et. Proin venenatis nisl dui, eget posuere justo bibendum vel. Morbi in ullamcorper risus. Aliquam eu tortor lorem. Duis mattis ligula eu dolor dignissim semper..

                    Donec molestie lorem vel varius condimentum. Phasellus at condimentum erat. Praesent eu ullamcorper elit. Fusce tempor neque neque, commodo mattis sapien finibus et. Proin venenatis nisl dui, eget posuere justo bibendum vel. Morbi in ullamcorper risus. Aliquam eu tortor lorem. Duis mattis ligula eu dolor dignissim semper..
                </TextContainer>
            </AboutContainer>
        </>
    );
};

export default AboutSection;
