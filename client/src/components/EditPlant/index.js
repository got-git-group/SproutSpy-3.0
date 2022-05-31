import './index.scss';
import { useState, useEffect } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useParams, useNavigate } from "react-router-dom";
import Loading from '../../utils/loading';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ZONES, QUERY_SINGLE_PLANT } from '../../utils/queries';
import { UPDATE_PLANT } from '../../utils/mutations';

const EditPlant = () => {
    const { plantId } = useParams();
    const { loading, error, data } = useQuery(QUERY_ZONES);
    const { loading: loadingPlant, error: errorPlant, data: data2 } = useQuery(QUERY_SINGLE_PLANT, 
        {
        variables: { plantId: plantId },
        }
      );
    const dataPlant = data2?.getSinglePlant;
    console.log(dataPlant);
    const [editPlant] = useMutation(UPDATE_PLANT);
    const [formState, setFormState] = useState(
        { 
            plantName: null, 
            spacing: null, 
            sunlight: "Full Sun", 
            seedDepth: null, 
            plantImg: null, 
            indoorStartCalc: null, 
            outdoorStartCalc: null, 
            zones: [] 
        });
    useEffect(() => {
        if (dataPlant) {
            setFormState({
                plantName: dataPlant?.plantName, 
                spacing: dataPlant?.spacing, 
                sunlight: dataPlant?.sunlight, 
                seedDepth: dataPlant?.seedDepth, 
                plantImg: dataPlant?.plantImg, 
                indoorStartCalc: dataPlant?.indoorStartCalc, 
                outdoorStartCalc: dataPlant?.outdoorStartCalc, 
                zones: dataPlant?.zones
            });
        }
    }, [dataPlant, setFormState]);

    console.log(formState);
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({...formState, [name]: !isNaN(parseInt(value)) ? parseInt(value) : value});
        console.log(formState, 'on change');
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await editPlant( {variables: { plantId, ...formState } } );
            console.log(formState, 'on submit');
        } catch (error) {
            console.log(error)
        }
    };

    const handleSelect = (event) => {
        const select = event.target;
        const selected = [...select.options].filter(op=>op.selected).map(op=>op.value);
        console.log(selected);
        const name = select.name;
        setFormState({...formState, [name]: selected});
        console.log(formState, 'on change');
    };
    
    // this is for the QUERY_ZONES but dropped down here b/c returns have to come after mutations
    if (!data) {
        return <p>Loading...</p>;
    };
    if (!dataPlant) {
        return <p>Loading...</p>;
    };

    return (
        <div id="addPlant">
            <div id="formWrapper">
                <form id="plantForm" onSubmit={handleFormSubmit}>
                    <h1>Choose which fields to edit</h1>
                    <div className="inputWrapper">
                        <label for="plantName">Plant Name*</label>
                        <input type="text" id="plantName" name="plantName" placeholder={dataPlant.plantName} onChange={handleChange}></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label for="spacing">How much space does the plant need?*</label>
                        <input type="text" id="spacing" name="spacing" placeholder={dataPlant.spacing} onChange={handleChange}></input>
                    </div>

                    <div className="inputWrapper">
                        <label for="seedDepth">How deep should the seeds be planted?</label>
                        <input type="text" id="seedDepth" name="seedDepth" placeholder={dataPlant.seedDepth} onChange={handleChange}></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label for="plantImg">Do you have an image link for this plant?</label>
                        <input type="text" id="plantImg" name="plantImg" placeholder={dataPlant.plantImg} onChange={handleChange}></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label for="indoorStartCalc">How many weeks before the last frost should this plant be started indoors?</label>
                        <input type="text" id="indoorStartCalc" name="indoorStartCalc" placeholder={dataPlant.indoorStartCalc} onChange={handleChange}></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label for="outdoorStartCalc">How many weeks before the last frost should this plant be sown outdoors?</label>
                        <input type="text" id="outdoorStartCalc" name="outdoorStartCalc" placeholder={dataPlant.outdoorStartCalc} onChange={handleChange}></input>
                    </div>

                    <div className="inputWrapper">
                        <label for="sunlight">How much sun does the plant need?*</label>
                        <select id="sunlight" name="sunlight" onChange={handleChange}>
                            <option selected={"Full Sun" === formState.sunlight} value="Full Sun">Full Sun</option>
                            <option selected={"Partial Sun" === formState.sunlight} value="Partial Sun">Partial Sun</option>
                            <option selected={"Partial Shade" === formState.sunlight} value="Partial Shade">Partial Shade</option>
                            <option selected={"Full Shade" === formState.sunlight} value="Full Shade">Full Shade</option>
                        </select>
                    </div>

                    <div className="inputWrapper">
                        <label for="zones">In which zones can this plant grow? (Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.)</label>
                        <select name="zones" id="zones"  multiple onChange={handleSelect}>
                            {data.zones.map((zone) => (
                                <option key={zone._id} value={zone._id}>{zone.zoneName}</option>
                            ))}
                    </select>
                    <p>*Required</p>
                    </div>
                    
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            
        </div>
    )
}

export default withAuthenticationRequired(EditPlant, { onRedirecting: () => <Loading /> });