import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import validationSchema from './validations';

function Signin() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async(values) => {
      try {
        console.log(values);
      } catch (error) {
        
      }
    }

  })

  return (
    <div>
      <Flex align='center' width='full' justifyContent='center'>
        <Box p={10}>
          <Box textAlign='center'>
            <Heading>Sign In</Heading>
          </Box>

          <Box my={5} textAlign='left'>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input type='email' 
                  name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email} />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' 
                  name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password} />
              </FormControl>

              <Button mt={4} width='full' type='submit' >
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin
