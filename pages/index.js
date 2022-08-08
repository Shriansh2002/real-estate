import { Flex, Box } from '@chakra-ui/react';
import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';
import Banner from '../components/Banner';

const details = [
  {
    id: 1,
    title: 'Renting Made Simple',
    description: 'Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.',
    imgUrl: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  },
  {
    id: 2,
    title: 'Tips for Renters',
    description: 'Find answers to all of your renting questions with the best renter’s guide in the galaxy.',
    imgUrl: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  },
];

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <HeroSection />

    {details.map((item) => (
      <CardSection key={item.id} item={item} inverted={item.id % 2 == 0 && true} />
    ))}

    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />

    {console.log(propertiesForRent)}

    <Flex flexWrap='wrap' justifyContent='center' gap={5}>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} renting={true} />)}
    </Flex>
    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    <Flex flexWrap='wrap' justifyContent='center' gap={5}>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;