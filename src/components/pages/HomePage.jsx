import PageTemplate from './PageTemplate.jsx'
import AvatarSection from '../organisms/AvatarSection.jsx';
import AboutSection from '../organisms/AboutSection.jsx';

const HomePage = () => {
    return (
        <PageTemplate>
            {/* <h1 color="primary">HIHI HISDLKJFDKJF</h1>
            */}
            <AvatarSection />
            <AboutSection />
        </PageTemplate>
    )
}

export default HomePage;