import './index.scss';
import React from "react";
import { useQuery } from '@apollo/client';
/* importing queries for both recommended and non-recommended so that we get all plants for the zone but can pull the recommended to generate first. */
import { QUERY_RECOMMENDED_PLANTS } from '../../utils/queries';
import Plants from '../Plants';
import { useParams } from "react-router-dom";

const Results = () => {
    // will need to pass in the zoneID to these queries
    const { zoneId } = useParams();
    console.log(JSON.stringify(zoneId));

    const { loading, error, data } = useQuery(QUERY_RECOMMENDED_PLANTS, {fetchPolicy: "no-cache", variables: {zoneId: zoneId}});
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