import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, } from '@chakra-ui/react'
import { useFormik } from 'formik';
import validationSchema from './validations';

function Signup() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (error) {
        
      }
    },
  });

  return (
    <div>
      <Flex align='center' width='full' justifyContent='center'>
        <Box p={10}>

          <Box textAlign='center'>
            <Heading>Sign Up</Heading>
          </Box>
          
          <Box my={5} textAlign='left'>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name='email'
                    type='email' 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.email} 
                    isInvalid={formik.touched.email && formik.errors.email} />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input name='password' 
                  type='password'  
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.password} 
                  isInvalid={formik.touched.password && formik.errors.password} />
              </FormControl>

              <FormControl>
                <FormLabel>Password Confirm</FormLabel>
                <Input name='passwordConfirm' 
                  type='password' 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.passwordConfirm} 
                  isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm} />
              </FormControl>

              <Button mt={4} width='full' type='submit'>
                Sign Up
              </Button>
            </form>
          </Box>

        </Box>
      </Flex>
    </div>
  )
}

export default Signup
