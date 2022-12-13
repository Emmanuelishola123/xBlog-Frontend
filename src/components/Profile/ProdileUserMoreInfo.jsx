import React from 'react'
import { Divider, Flex, Icon, Text } from '@chakra-ui/react'
import { BsThreeDots } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";


function ProdileUserMoreInfo() {
  return (
    <Flex direction={'column'} width={'100%'}>
    <Divider my="4" display={{  md: "none" }} />
    <Flex direction={"column"} gap={3} >
      <Flex direction={"column"} bgColor={{md: 'white'}} py={{md: 3}} rounded={{base: 'none', md: 'lg'}} border={{base: 'none', md: '1px solid #dcdcdc' }} shadow={{base: 'none', md: 'sm'}}> 
        <Text px={{md: 4}} as={"h5"} fontSize='lg' color="black" fontWeight={{base: 'medium', md: 'bold'}}>
          Work
        </Text>
        <Divider my={3} display={{base: 'none', md: 'flex'}} />
        <Text px={{md: 4}} as={"p"}>
          Senior Software Developer, Accessibility Specialist at Oura
        </Text>
      </Flex>
      <Flex direction={"column"} bgColor={{md: 'white'}} py={{md: 3}} rounded={{base: 'none', md: 'lg'}} border={{base: 'none', md: '1px solid #dcdcdc' }} shadow={{base: 'none', md: 'sm'}}> 
        <Text px={{md: 4}} as={"h5"} fontSize='lg' color="black" fontWeight={{base: 'medium', md: 'bold'}}>
          Currently Learning
        </Text>
        <Divider my={3} display={{base: 'none', md: 'flex'}} />
        <Text px={{md: 4}} as={"p"}>
          Accessibility (there's so much to learn!), Android, Kotlin
        </Text>
      </Flex>
      <Flex direction={"column"} bgColor={{md: 'white'}} py={{md: 3}} rounded={{base: 'none', md: 'lg'}} border={{base: 'none', md: '1px solid #dcdcdc' }} shadow={{base: 'none', md: 'sm'}}> 
        <Text px={{md: 4}} as={"h5"} fontSize='lg' color="black" fontWeight={{base: 'medium', md: 'bold'}}>
          Skills/Languages
        </Text>
        <Divider my={3} display={{base: 'none', md: 'flex'}} />
        <Text px={{md: 4}} as={"p"}>
          React, JavaScript, Node, GraphQL, Accessibility
        </Text>
      </Flex>
    </Flex>

    <Divider my="4" display={{  md: "none" }} />
    <Flex mt={{md: 3}} direction={"column"} bgColor={{md: 'white'}} py={{md: 3}} rounded={{base: 'none', md: 'lg'}} border={{base: 'none', md: '1px solid #dcdcdc' }} shadow={{base: 'none', md: 'sm'}}> 
      <Flex alignItems={"center"} gap="2" py={1.5} px={4} color={"grey"} fontSize="md">
        <Icon as={RiFileList3Line} fontSize="2xl" />
        <Text>43 posts published</Text>
      </Flex>
      <Flex alignItems={"center"} gap="2" py={1.5} px={4} color={"grey"} fontSize="md">
        <Icon as={RiFileList3Line} fontSize="2xl" />
        <Text>98 Followers</Text>
      </Flex>
      <Flex alignItems={"center"} gap="2" py={1.5} px={4} color={"grey"} fontSize="md">
        <Icon as={RiFileList3Line} fontSize="2xl" />
        <Text>110 Following</Text>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default ProdileUserMoreInfo