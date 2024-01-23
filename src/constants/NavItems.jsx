import EmailIcon from '@mui/icons-material/Email';
import { LinkedIn, GitHub, Home } from '@mui/icons-material';
import theme from '../theme';
import figma from '../assets/icons/figma.svg';

const FigmaIcon = () => (
    <img src={figma} style={{ width: 24, height: 24, color: theme.palette.secondary.main }} alt="Figma" />
)

export const NavItems = {
    Email: {
        icon: <EmailIcon sx={{ color: theme.palette.secondary.main, fontSize: 'inherit' }} />,
        text: 'Email',
        link: 'mailto:test@test.com'
    },
    LinkedIn: {
        icon: <LinkedIn sx={{ color: theme.palette.secondary.main, fontSize: 'inherit' }} />,
        text: 'LinkedIn',
        link: 'https://www.linkedin.com'
    },
    GitHub: {
        icon: <GitHub sx={{ color: theme.palette.secondary.main, fontSize: 'inherit' }} />,
        text: 'GitHub',
        link: 'https://github.com/abbymac'
    },
    Figma: {
        icon: <FigmaIcon />,
        text: 'Figma',
        link: 'https://www.figma.com/file/JHw3TO7Va4WhVeevXnrrji/Resume-Site?type=design&node-id=0%3A1&mode=design&t=9hgJcjzqaRLwQtBG-1'
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
        icon: <Home sx={{color: theme.palette.secondary.main, fontSize: 30}}/>,
        text: 'Home'
    }
};
