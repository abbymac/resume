import EmailIcon from '@mui/icons-material/Email';
import { LinkedIn, GitHub } from '@mui/icons-material';
import theme from '../theme';

export const NavItems = {
    email: {
        icon: <EmailIcon sx={{color: theme.palette.secondary.main}}/>,
        text: 'Email',
        link: 'mailto:test@test.com'
    },
    linkedIn: {
        icon: <LinkedIn sx={{color: theme.palette.secondary.main}}/>,
        text: 'LinkedIn',
        link: 'https://www.test.com'
    },
    GitHub: {
        icon: <GitHub sx={{color: theme.palette.secondary.main}}/>,
        text: 'GitHub',
        link: 'https://www.google.com'
    }
};

export const SectionItems = {
    about: {
        icon: ''
    },
    projects: {
        
    }
};
