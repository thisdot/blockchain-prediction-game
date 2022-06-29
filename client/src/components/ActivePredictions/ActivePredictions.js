import { useEffect, useState } from "react";
import { Table, TableContainer, Tbody, Td,  Th, Thead, Tr } from "@chakra-ui/react";
import { useMoralisCloudFunction } from "react-moralis";

const ActivePredictions = () => {
    const [ isFetching, setIsFetching ] = useState(true);
    const [ predictions, setPredictions ] = useState([]);

    const { fetch } = useMoralisCloudFunction(
        "getPredictions",
        { status: true },
        { autoFetch: false }
    );
    
    const getActivePredictions = () =>
        fetch({
            onSuccess: (result) => {
                setPredictions(result);
                setIsFetching(false);
            },
            onError: (error) => {
                console.log(error);
                setIsFetching(false);
            }
        });

    useEffect(() => {
        getActivePredictions();
    }, []);

    if(isFetching) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <h1>Active Predictions: {predictions.length}</h1>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Pair</Th>
                            <Th>Feed</Th>
                            <Th>Prediction</Th>
                            <Th>Deadline</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            predictions.map(predictionData => {
                                const { id, attributes } = predictionData;
                                const { account, pair, prediction, predictionDeadline } = attributes;
                                return (
                                    <Tr key={id}>
                                        <Td>{id}</Td>
                                        <Td>{pair}</Td>
                                        <Td>{account}</Td>
                                        <Td>{prediction}</Td>
                                        <Td>{predictionDeadline}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default ActivePredictions;