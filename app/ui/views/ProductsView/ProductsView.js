import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Button, Card, Paragraph} from 'react-native-paper';
import styled from 'styled-components/native';
import {ProductContext} from '../../providers/ProductProvider';
import {ApiService} from '../../../data/services/ApiServices';
import {productResponse} from '../../../data/actions/ProductActions';

const ViewContainer = styled.SafeAreaView`
  flex: 1;
`;

const ProductCard = styled(Card)`
  margin: 5px;
`;

export default function ProductsView(props) {
  const [{productList, selectedProduct}, productDispath] =
    useContext(ProductContext);

  useEffect(() => {
    ApiService.get('product').then(productList =>
      productDispath(productResponse(productList)),
    );
  });

  return (
    <ViewContainer>
      <Appbar.Header>
        <Appbar.Content title={'Tapiocaria'} />
      </Appbar.Header>
      <ScrollView>
        {productList.map(item => (
          <ProductCard key={item.id}>
            <Card>
              <Card.Cover source={{uri: item.picture}}></Card.Cover>

              <Card.Title
                title={item.name}
                right={props => <Button>Selecionar</Button>}
              />

              <Card.Content>
                <Paragraph>R$ 8,00</Paragraph>
              </Card.Content>
            </Card>
          </ProductCard>
        ))}
      </ScrollView>
    </ViewContainer>
  );
}
