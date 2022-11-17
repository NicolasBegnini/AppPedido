import React from 'react';
import { ScrollView } from 'react-native';
import { Appbar, Button, Card, Paragraph } from 'react-native-paper';

import styled from 'styled-components/native';

const ViewContainer = styled.SafeAreaView`
    flex: 1;
`;

const ProductCard = styled(Card)`

    margin:7px;

`;

export default function ProductsView(props) {

    return (
        <ViewContainer>

            <Appbar.Header>
                <Appbar.Content title={'Sorveteria'}/>

            </Appbar.Header>
            <ScrollView>
                <ProductCard>

                <Card>

                    <Card.Cover 

source={{uri:'https://polosulsc.com.br/wp-content/webp-express/webp-images/uploads/2018/03/Tr%C3%AAs-tipos-e-sabores-de-sorvete-diferentes-1.jpg.webp'}}

></Card.Cover>

                    <Card.Title
                        title={'Sorvetes'}
                        right={(props) => <Button>Selecionar</Button>}
                        />

                    <Card.Content>
                        <Paragraph>R$ 10,00</Paragraph>
                    </Card.Content>

                </Card>
                        </ProductCard>
                
                <ProductCard>


                <Card>
                    <Card.Cover 

source={{uri:'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MU3RGOXROII6ZLAWR67XDFGNPA.jpg'}}

></Card.Cover>

                    <Card.Title
                        title={'Sundae'}
                        right={(props) => <Button>Selecionar</Button>}
                        />

                    <Card.Content>
                        <Paragraph>R$ 15,00</Paragraph>
                    </Card.Content>

                </Card>
                        </ProductCard>
                <ProductCard>


                <Card>
                    <Card.Cover 

source={{uri:'https://www.selecoes.com.br/wp-content/uploads/2021/08/milk-shake-id1311373994-750x420.jpg'}}

></Card.Cover>

                    <Card.Title
                        title={'Milk Shake'}
                        right={(props) => <Button>Selecionar</Button>}
                        />

                    <Card.Content>
                        <Paragraph>R$ 20,00</Paragraph>
                    </Card.Content>

                </Card>

                        </ProductCard>
            </ScrollView>

        </ViewContainer>

    )
}

