import { SimpleGrid, Container} from '@mantine/core';
import { useEffect, useState } from 'react';
import { listProducts } from '../../api/ProductService';
import ProductCard from '../../components/ProductCard/ProductCard';

function ProductCardsGrid() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProductList(await listProducts());
    }
    fetchProducts();
    
  }, [])

  const cards = productList.map((article) => (
    <div key={article.id}>
      <ProductCard productData={article}/>
    </div>
  ));

  return (
    <Container style={{maxWidth: '100%'}} py="xl">
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

export default ProductCardsGrid;