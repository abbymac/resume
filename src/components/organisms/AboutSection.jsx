import styled from 'styled-components';
import { Grid, useTheme, Link, Tooltip, Button } from '@mui/material';

import Spacer from '../atoms/Spacer';
import { NavItems } from '../../constants/NavItems';

const AboutContainer = styled(Grid)`
    flex-direction: row !important;
    width: 80% !important;
    margin: auto;
`
const TextContainer = styled(Grid)`
    flex-grow: 2;
    color: ${props => props.theme.palette.secondary.main}
`

const MenuContainer = styled(Grid)`
    flex-direction: column;
`

const AboutSection = () => {
    const theme = useTheme();

    return (
        <>
            <Spacer size={5} />
            <AboutContainer container>
                <MenuContainer item xs={2}>
                    <Spacer size={6} />
                    <Grid item sx={{ marginTop: 5 }}>
                        <Grid container sx={{ flexDirection: 'column' }}>
                            {Object.keys(NavItems).map((itemKey) => (
                                <Link key={itemKey} href={NavItems[itemKey].link} target="_blank" sx={{ textDecoration: 'none', paddingTop: 2 }}>
                                    <Tooltip title={NavItems[itemKey].text}>
                                        <Button sx={{ color: '#fff', fontSize: 25 }}>
                                            {NavItems[itemKey].icon}
                                        </Button>
                                    </Tooltip>

                                </Link>
                            ))}
                        </Grid>

                    </Grid>
                </MenuContainer>
                <TextContainer item xs={10} theme={theme}>
                    <Grid container sx={{ flexDirection: 'column' }}>
                        <Grid item sx={{ fontSize: '35px', fontWeight: '100' }}>
                            Hi There!
                        </Grid>
                        <Spacer size={1} />
                        <Grid item>
                            Hi, I'm Abby, a software engineer with a background in mechanical engineering. I began my career as a marketing analyst, where I built upon the programming knowledge I obtained in college and taught myself how to code. This self-driven learning eventually led me to transition into a full-stack engineering role. In this position, I continued to enhance my skills as part of a professional engineering team, complementing my work with independent learning. Following company-wide layoffs and the challenges of the global pandemic, I seized the opportunity to further expand my knowledge base and improve my portfolio by taking a Udacity course.
                            I started my journey in tech at Goodway Group as an operations engineer, where I quickly embraced additional engineering tasks, driven by my goal to join a software engineering team. This role enabled me to dive deep into the codebase and explore our ETL process. My dedication and skill allowed me to transition to our Data Solutions team after just eight months.
                        </Grid>
                        <Spacer size={1} />
                        <Grid item>
                            There, I contributed significantly to the ongoing development of our software products. My journey continued as I was promoted from associate software engineer to software engineer, playing a key role in the design and development of a new greenfield project. This project focused on integrating disparate data into a cohesive product, showcasing the media performance of various advertising and marketing campaigns run by our business teams for our clients.
                        </Grid>
                        <Spacer size={1} />
                        <Grid>
                            Feel free to explore this site to discover my resume, LinkedIn profile, and GitHub projects. I'm constantly updating and enhancing the content, so make sure to revisit for the latest features and updates! 😊
                        </Grid>
                    </Grid>
                </TextContainer>
            </AboutContainer>
        </>
    );
};

export default AboutSection;
