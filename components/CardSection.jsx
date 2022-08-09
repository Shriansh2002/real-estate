import {
    chakra,
    Box,
    Flex,
    Text,
    SimpleGrid,
    Image
} from "@chakra-ui/react";

const TextComponent = ({ item }) => {
    return (
        <Box
            bg="white"
            _dark={{ bg: "gray.800" }}
            pt={10}
            shadow="lg"
            rounded="md"
        >
            <Flex direction="column">
                <Box px={10} pb={5}>
                    <Text
                        mb={2}
                        fontSize="3xl"
                        fontWeight={["bold", "extrabold"]}
                        color="gray.900"
                        _dark={{ color: "gray.50" }}
                        lineHeight="tight"
                    >
                        {item.title}
                    </Text>
                    <chakra.p
                        mb={6}
                        fontSize="lg"
                        color="gray.500"
                        _dark={{ color: "gray.500" }}
                    >
                        {item.description}
                    </chakra.p>
                </Box>
            </Flex>
        </Box>
    );
};

const ImageComponent = ({ item }) => {
    return (
        <Box
            bg="white"
            _dark={{ bg: "gray.800" }}
            shadow="lg"
            rounded="md"
            height={320}
        >
            <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={item.imgUrl}
            />
        </Box>
    );
};

export default function CardSection({ item, inverted = false }) {
    return (
        <Box textAlign={{ base: "left", md: "center" }}>
            <Box pt={10} pb={10} rounded="md">
                <Box>
                    <SimpleGrid
                        columns={[1, , , 2]}
                        rounded="md"
                        mx={[10, , 0]}
                        textAlign="left"
                    >
                        {inverted ? (
                            <>
                                <TextComponent item={item} />
                                <ImageComponent item={item} />
                            </>
                        ) : (
                            <>
                                <ImageComponent item={item} />
                                <TextComponent item={item} />
                            </>
                        )}

                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
}
