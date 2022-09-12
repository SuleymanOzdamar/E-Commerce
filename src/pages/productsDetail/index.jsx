import { Box, Text, Button, Flex } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import ImageGallery from 'react-image-gallery';
import { useBasket,  } from '../../components/contexts/BasketContext';

const images = [
    {
      original: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80',
    },
  ];

function ProductsDetail() {

  const { addToBasket, items } = useBasket();

  const findBasketItem = items.find((item) => item === 1 );

  return (
    <div>
      <Text as='h2' fontSize='2xl' fontWeight='bold' textAlign='center'>
        Food
      </Text>

      <Text textAlign='center'>
        {moment(Image.createdAt).format('DD/MM/YYYY')}
      </Text>

      <Text textAlign='center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis in dignissimos, dolorem earum explicabo quia porro! Dolorem, repellat accusantium.</Text>

      <Flex align='end' width='full' justifyContent='end' mt='5'>
        <Button colorScheme='red' onClick={() => addToBasket()}>
          {
            findBasketItem ? 'Remove from basket' : 'Add to basket'
          }
        </Button>
      </Flex>
      
      <Box margin='10'>
        <ImageGallery items={images} />
      </Box>

      
    </div>
  )
}

export default ProductsDetail
