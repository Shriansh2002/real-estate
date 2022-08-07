import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const DefaultImage = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) =>
(
    <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
            <Box>
                <Image
                    src={coverPhoto ? coverPhoto.url : DefaultImage}
                    width={400} height={260}
                    alt="image"
                />
            </Box>
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                        <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='red.400'>
                    {rooms}
                    <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize='lg'>
                    {title.length > 30 ? title.substring(0, 30) + '...' : title}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;