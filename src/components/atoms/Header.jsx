import { Box, Button, Link, Tooltip } from '@mui/material';
import styled from 'styled-components';
import { NavItems } from '../../constants/NavItems';

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
        <HeaderContainer>
            <NavItemContainer sx={{ padding: '20px' }}>
                {Object.keys(NavItems).map((itemKey) => (
                    <Link key={itemKey} href={NavItems[itemKey].link} target="_blank" sx={{ textDecoration: 'none' }}>
                        <Tooltip title={NavItems[itemKey].text}>
                            <Button sx={{ color: '#fff', fontSize: 25 }}> 
                                {NavItems[itemKey].icon}
                            </Button>
                        </Tooltip>
                    </Link>
                ))}
            </NavItemContainer>
        </HeaderContainer>
    );
};

export default Header;
