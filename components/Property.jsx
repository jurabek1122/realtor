import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import millify from 'millify';
import defaultImg from '../assets/images/default.jpg';

const Property = ({ property }) => {
    return (
        <Link href={`/property/${property.externalID}`} passHref>
            <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
                <Box>
                    <Image src={property?.coverPhoto?.url || defaultImg} width={400} height={260} alt='image'/>
                </Box> 
                <Box w='full'>
                    <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                        <Flex alignItems='center'>
                            <Box paddingRight='3' color='green.400'>
                                {property.isVerified && <MdVerified />}
                            </Box>
                            <Text fontWeight='bold' fontSize='lg'>
                                AED {millify(property.price)}{property.rentFrequency && `/${property.rentFrequency}`}
                            </Text>
                        </Flex>
                        <Box>
                            <Avatar size='sm' src={property.agency?.logo?.url} />
                        </Box>
                    </Flex>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                        {property.rooms} <FaBed /> | {property.baths} <FaBath /> | {millify(property.area)} <BsGridFill />
                    </Flex>
                    <Text fontSize='lg'>
                        {property.title.length > 30 ? `${property.title.substring(0, 30)}...` : property.title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    );
};

export default Property;