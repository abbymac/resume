import styled from 'styled-components';
import Header from '../atoms/Header';
import { useTheme } from '@mui/material/styles';

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.backgroundColor || '#1a1d30'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start; // Adjusts alignment along the cross axis

`;

const Content = styled.div`
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: start; // Adjusts alignment along the cross axis
`;

const PageTemplate = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <PageContainer backgroundColor={theme.palette.primary.main}>
      <Header />
      <Content>{children}</Content>
    </PageContainer>
  );
};

export default PageTemplate;
