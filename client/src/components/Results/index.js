import './index.scss';
import React from "react";
import { useQuery } from '@apollo/client';
/* importing queries for both recommended and non-recommended so that we get all plants for the zone but can pull the recommended to generate first. */
import { QUERY_RECOMMENDED_PLANTS } from '../../utils/queries';
import Plants from '../Plants';

const Results = ( { zones }) => {
    // will need to pass in the zoneID to these queries
    console.log(zones);
    const { loading, error, data } = useQuery(QUERY_RECOMMENDED_PLANTS, {variables: {zoneId: '629280eaf1afa589544b3656'}});
    console.log(data);
    if (!data) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            {/* loop through results and create a plant card for each result, putting those with the recommended value first */}
            <Plants
            plants = {data}
            />

        </div>
    )
}

export default Results;