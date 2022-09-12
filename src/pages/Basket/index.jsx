import { Alert, Box, Image, Button, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    FormControl,
    FormLabel,
    Textarea,
    ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../components/contexts/BasketContext'

function Basket() {
    const [adress, setAdress] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef()
    const { items, removeFromBasket, emptyBasket } =useBasket();

    const total = items.reduce((acc) => acc + 100, 0);

    const handleSubmitForm = async () => {
        console.log('submit');

        emptyBasket();
        onClose();
    };
 
  return (
    <div>
      {items.length < 1 && <Alert status='warning'>You have not any items in your basket</Alert> }
    
        {items.length > 0 && (
            <div>
                <ul>
                    {items.map((item) => (
                        <li>
                            <Link to={'/basket'}>
                                <Box>
                                    {item}
                                    Food - 100 TL
                                    <Image src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'></Image>
                                </Box>
                            </Link>
                            <Button m={5} colorScheme='green' onClick={() => removeFromBasket(item) }>Remove from basket</Button>
                        </li>
                    )
                    )}
                </ul>
                
                <Box mt={10}>
                    <Text fontSize='20'>Total: {total} TL </Text>

                    <Button mt='3' colorScheme='green' onClick={onOpen}>Order</Button>

                    <Modal
                        initialFocusRef={initialRef}
                        isOpen={isOpen}
                        onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Order</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody pb={6}>
                            <FormControl>
                              <FormLabel>Adress</FormLabel>
                              <Textarea ref={initialRef} placeholder='Adress' value={adress} onChange={(e) => setAdress(e.target.value)} />
                            </FormControl>
                          </ModalBody>

                          <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                              Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                          </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>

            </div>
        )}

    </div>
  )
}

export default Basket
