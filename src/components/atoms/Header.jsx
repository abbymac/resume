import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import {NavItems} from '../../constants/NavItems';
import {Link} from '@mui/material';

const HeaderContainer = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

const NavItemContainer = styled(Box)`
    padding: 20px;
`

const Header = () => {
    return (
        <HeaderContainer >
            <NavItemContainer sx={{ padding: '20px' }} >
                {Object.keys(NavItems).map((item) => (
                    <Link key={NavItems[item].text} href={NavItems[item].link} target="_blank">
                        <Button key={NavItems[item].text} sx={{ color: '#fff' }} >
                            {NavItems[item].icon}
                        </Button>
                    </Link>
                ))}
            </NavItemContainer>
        </HeaderContainer>
    )
}

export default Header;