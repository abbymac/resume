import { Grid, Toolbar, Box, Button } from '@mui/material';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import EmailIcon from '@mui/icons-material/Email';

const navItems = ['home', 'resume', 'about']
const testItem = {
    email: {
        icon: EmailIcon,
    }
}

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
            <NavItemContainer sx={{ display: { xs: 'none', sm: 'block' }, padding: '20px' }}>
                {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                </Button>
                ))}
            </NavItemContainer>
            {/* <NavItemContainer>
                {Object.keys(testItem).map(key => {
                    return (
                        key.icon
                    )
                })}
            </NavItemContainer> */}
        </HeaderContainer>
    )
}

export default Header;