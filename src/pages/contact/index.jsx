import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Textarea, } from '@chakra-ui/react'
import { useFormik } from 'formik';


function Contact() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          passwordConfirm: '',
        },
      });
  return (
    <div>
        <Flex align='center' width='full' justifyContent='center'>
        <Box p={10}>

          <Box textAlign='center'>
            <Heading>Contact Us</Heading>
          </Box>
          
          <Box my={5} textAlign='left'>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name='email'
                    type='email' 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.email}  />
              </FormControl>

              <FormControl my={4}>
                <FormLabel>Full Name</FormLabel>
                <Input name='fullname' 
                  type='text'  
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  i />
              </FormControl>

              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea name='Message' 
                  type='text' 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  />
              </FormControl>

              <Button mt={4} width='full' type='submit'>
                Send
              </Button>
            </form>
            <Box my={5}>
                <p><strong>tel:</strong> +123456789</p>
                <p><strong>e-mail:</strong>  lorem@lorem.com</p>
            </Box>
          </Box>
        
        </Box>
      </Flex>
    </div>
  )
}

export default Contact