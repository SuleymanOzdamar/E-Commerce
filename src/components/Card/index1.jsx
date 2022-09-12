import React from 'react'
import { Button, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import { useBasket } from '../../components/contexts/BasketContext';


function Card1({ item }) {

  const { addToBasket, items } = useBasket();
  const findBasketItem = items.find(
    (basket_item) => basket_item === item
  ); 
    

  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p='3'>
      <Link to={`/2`}>
        <Image src='https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80' alt='product' />

        <Box p={6}>
            <Box d='plex' alignItems='baseline'>
                {moment(Image.createdAt).format('DD/MM/YYYY')}
            </Box>

            <Box mt={1} fontWeight='semibold' as='h4' lineHeight='tight'>
                Computer
            </Box>
            <Box>5000 TL</Box>
        </Box>
      </Link>

        <Button colorScheme='red' variant='solid' onClick={() => addToBasket(item, findBasketItem) }>
            {
              findBasketItem ? 'Remove from basket' : 'Add to basket'
            }
        </Button>

    </Box>
  )
}

export default Card1