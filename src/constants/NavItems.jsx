import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { LinkedIn, GitHub, Home, Article } from '@mui/icons-material';
import theme from '../theme';
import resume from '../assets/resume.pdf';
import FigmaIcon from '../components/atoms/FigmaIcon';

export const NavItems = {
    Email: {
        icon: <EmailIcon sx={{ color: theme.palette.tertiary.main, fontSize: 'inherit' }} />,
        text: 'Email',
        link: 'mailto:abbylangmcinerney@gmail.com'
    },
    LinkedIn: {
        icon: <LinkedIn sx={{ color: theme.palette.tertiary.main, fontSize: 'inherit' }} />,
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/abby-mcinerney/'
    },
    GitHub: {
        icon: <GitHub sx={{ color: theme.palette.tertiary.main, fontSize: 'inherit' }} />,
        text: 'GitHub',
        link: 'https://github.com/abbymac'
    },
    Figma: {
        icon: <FigmaIcon color={theme.palette.tertiary.main} />        , // Pass the color as a prop
        text: 'Figma',
        link: 'https://www.figma.com/file/JHw3TO7Va4WhVeevXnrrji/Resume-Site?type=design&node-id=0%3A1&mode=design&t=9hgJcjzqaRLwQtBG-1'
    },
    Resume: {
        icon: <Article sx={{ color: theme.palette.tertiary.main, fontSize: 'inherit' }} />,
        text: 'Resume',
        link: resume
    }
};

export const SectionItems = {
    about: {
        icon: ''
    },
    projects: {
        icon: ''
    },
    home: {
        icon: <Home sx={{ color: theme.palette.secondary.main, fontSize: 30 }} />,
        text: 'Home'
    }
};
