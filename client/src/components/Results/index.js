import './index.scss';
import React from "react";
import { useQuery } from '@apollo/client';
/* importing queries for both recommended and non-recommended so that we get all plants for the zone but can pull the recommended to generate first. */
import { QUERY_RECOMMENDED_PLANTS } from '../../utils/queries';
import Plants from '../Plants';

const Results = (zone) => {
    // will need to pass in the zoneID to these queries
    console.log(zone);

    const { loading, error, data } = useQuery(QUERY_RECOMMENDED_PLANTS, {variables: {zoneId: '628dad52e0fd361cc562d5bd'}});
    console.log(data);
    if (!data) {
        return <p>Loading...</p>;
    };
    return (
        <div>
            <Plants
            plants = {data}
            />

        </div>
    )
};

export default Results;