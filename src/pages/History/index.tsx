import { useUser } from '../../hooks/useUser';

import { Main } from '../../components/Follow/Main';
import { Footer } from '../../components/Footer';
import { Container, PageContainer,BoxList } from './styles';
import { CgProfile } from 'react-icons/cg';
interface HeaderProps {
    length: [],
}
export function History(props: HeaderProps) {
    const { followers, acessUserFollow } = useUser();
    
   const searchHistories = JSON.parse(localStorage.getItem("histories")||"[]")
       // @ts-ignore
   let uniqueObjArray = [...new Map(searchHistories.map((item) => [item["id"], item])).values(),
];
    return (
        <Container>
            <PageContainer>
                <p style={{textAlign:'center'}}>History list</p>
                {searchHistories?.length>0 ?
                <BoxList>
                <Main
                    profileIcon={<CgProfile size={20} />}
                    follow={uniqueObjArray.reverse()}
                    acessUser={acessUserFollow}
                    page={"followers"}
                />
                </BoxList>
                :'History is empty'}
               
            </PageContainer>
            <Footer />
        </Container>
    );
}