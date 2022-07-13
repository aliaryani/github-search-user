import { Header } from '../../components/Home/Header';
import { Searcher } from '../../components/Home/Searcher';
import { Footer } from '../../components/Footer';

import { Container, PageContainer } from './styles';
import { Navigation } from '../../components/Navigation';

export function Home() {
    return (
       <>
      
        <Container>
            <PageContainer>
                <Header />
                <Searcher />
                <Footer />
            </PageContainer>
        </Container>
       </>
    );
}