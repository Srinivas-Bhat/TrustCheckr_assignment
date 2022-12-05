import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineHeart } from "react-icons/ai";

const Flight = ({el}) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' , lg:"66%" }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {el.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            @{el.id}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {`From ${el.originCity} to ${el.destinationCity}`}
          </Text>
          <Heading as="h5">
              {`INR - ${(el.price).toFixed(0)}`}
          </Heading>
        
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              
              >
              <AiOutlineHeart fontSize="30px" color="gray" />
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Book Flight
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}

export default Flight