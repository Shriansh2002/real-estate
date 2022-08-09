import { Box, Text, Badge } from '@chakra-ui/layout';
import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import Link from 'next/link';

const Property = ({ property: { coverPhoto, rooms, title, baths, score_l1, price, randBoostScore, rentFrequency, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref >
        <Box
            bg="white"
            _dark={{ bg: "gray.800" }}
            maxW="sm"
            borderWidth="1px"
            roundedTop="md"
            padding={23}
            shadow="lg"
            style={{ cursor: 'pointer' }}
            _hover={{ transform: 'scale(1.02)' }}
        >
            <Image
                src={coverPhoto.url}
                alt='property'
                roundedTop="lg"
            />

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" colorScheme="red">
                        New
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {rooms} Rooms &bull; {baths} baths
                    </Box>
                </Box>

                <Text
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                >
                    AED
                    {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    {rentFrequency && `/${rentFrequency}`}
                </Text>

                <Box>
                    {title}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            < StarIcon
                                key={i}
                                color={i < (randBoostScore / 100) ? "red.500" : "gray.300"}
                            />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {score_l1} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    </Link>
);

export default Property;;