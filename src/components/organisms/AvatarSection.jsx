import styled from 'styled-components';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import Header from '../atoms/Header';
import avatarImage from '../../assets/avatar.jpg';

const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Container = styled(Grid)`
    background-color: ${props => props.theme.palette.secondary.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    flex-direction: column !important;
`

const Text = styled(Typography)`
    padding: 10px 0 5px 0 ;
    color: ${props => props.theme.palette.tertiary.main};
`;



const AvatarSection = ({ children, ...props }) => {
    const theme = useTheme();

    return (
        <PageContainer >
            <Container container theme={theme} >
                <Grid item >
                    <Text variant="h2" theme={theme} sx={{paddingBottom: 0, fontWeight: 100}}>
                        Abby McInerney
                    </Text>
                </Grid>
                <Grid item>
                    <Text variant="body2" sx={{ color: theme.palette.tertiary.main }} theme={theme}>
                        Software Engineer
                    </Text>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{ width: 100, height: 100 }}
                        src={avatarImage}
                    />
                </Grid>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <PlaceIcon sx={{color: theme.palette.primary.main}}/>
                    <Text variant="body2" sx={{ color: theme.palette.primary.main }} theme={theme}>
                        Denver, CO
                    </Text>
                </Grid>
            </Container>
        </PageContainer>
    );
};

export default AvatarSection;
