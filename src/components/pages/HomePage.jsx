import PageTemplate from './PageTemplate.jsx'
import AvatarSection from '../organisms/AvatarSection.jsx';
import AboutSection from '../organisms/AboutSection.jsx';

const HomePage = () => {
    return (
        <PageTemplate>
            <AvatarSection />
            <AboutSection />
        </PageTemplate>
    )
}

export default HomePage;