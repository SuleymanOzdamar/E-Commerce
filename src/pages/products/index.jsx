import React from 'react'
import Card from '../../components/Card'
import { Grid,  } from '@chakra-ui/react'
import Card1 from '../../components/Card/index1';
import Card2 from '../../components/Card/index2';


function Products() {
    return (
      <div>

          <Grid templateColumns='repeat(3, 1fr)' gap={4}>
              <Card />
              <Card1 />
              <Card2 />
          </Grid>

      </div>
    );
}

export default Products
