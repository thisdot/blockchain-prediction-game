import { CloseIcon } from '@chakra-ui/icons';
import { Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import prizeIcon from '../../assets/icons/prize.svg';

const BetWonNotification = () => {
    return (
        <HStack
            bg="whiteAlpha.50"
            w="100%"
            p={4}
            border="1px solid"
            borderRadius="6px"
            borderColor="yellow.200"
            alignItems="center"
            justifyContent="space-between"
        >
            <HStack>
                <Image src={prizeIcon} h="8" w="8" alt="Prize Icon" />
                <VStack 
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Text fontWeight={700} fontSize="sm" color="gray.200">
                        You won a bet!
                    </Text>
                    <Text fontWeight={500} fontSize="sm" color="gray.500" mt="0px !important">
                        withdraw it on “My Bets” tab
                    </Text>
                </VStack>
            </HStack>

            <Flex
                width="24px"
                height="24px"
                borderRadius="6px"
                bg="whiteAlpha.50"
                justify="center"
                alignItems="center"
                // onClick={removeBet}
            >   
                <CloseIcon 
                    w="9px" 
                    h="9px" 
                    color="gray.50"
                />
            </Flex>
        </HStack> 
    )
}

export default BetWonNotification;