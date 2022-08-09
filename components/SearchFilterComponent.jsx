import { useEffect, useState } from 'react';
import { Flex, Box, Input, Spinner, Icon, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilterComponent = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);
        values.forEach((item) => {
            query[item.name] = item.value;
        });

        router.push({
            pathname: path,
            query: query
        });

    };

    return (
        <Flex
            bg="gray.100"
            p="4"
            justifyContent='center'
            flexWrap='wrap'
        >
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        placeholder={filter.placeholder}
                        onChange={
                            (e) => searchProperties({ [filter.queryName]: e.target.value })
                        }
                        w='fit-content'
                        p='2'
                    >
                        {filter?.items?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>

                </Box>
            ))}

        </Flex>
    );
};

export default SearchFilterComponent;