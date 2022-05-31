import './index.scss';
import { useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../../utils/loading';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ZONES } from '../../utils/queries';
import { ADD_PLANT } from '../../utils/mutations';

const AddPlant = () => {
    // let plantName, spacing, sunlight, seedDepth, plantImg, indoorStartCalc, outdoorStartCalc, zones;
    const { loading, error, data } = useQuery(QUERY_ZONES);

    const [addPlant] = useMutation(ADD_PLANT);
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
    const handleChange = (event) => {
        const { name, value } = event.target;
        let tempValue = value;
        if (name === 'outdoorStartCalc' || name === 'indoorStartCalc') {
            tempValue = parseInt(value);
        }
        setFormState({...formState, [name]: tempValue});
        console.log(formState, 'on change');
    };

    const handleSelect = (event) => {
        const select = event.target;
        const selected = [...select.options].filter(op=>op.selected).map(op=>op.value);
        console.log(selected);
        const name = select.name;
        setFormState({...formState, [name]: selected});
        console.log(formState, 'on change');
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(formState, 'on submit');
            await addPlant( {variables: { ...formState } });
            
        } catch (error) {
            console.log(error)
        }
    };
    
    // this is for the QUERY_ZONES but dropped down here b/c returns have to come after mutations
    if (!data) {
          return <p>Loading...</p>;
      };

    return (
        <div id="addPlant">
            <div id="formWrapper">
                <form id="plantForm" onSubmit={handleFormSubmit}>
                    <h1>Add a Plant to the Database</h1>
                    <div className="inputWrapper">
                        <label htmlFor="plantName">Plant Name*</label>
                        <input type="text" id="plantName" name="plantName" placeholder="Plant name.." onChange={handleChange}></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label htmlFor="spacing">How much space does the plant need?*</label>
                        <input type="text" id="spacing" name="spacing" placeholder="ex. 15 inches" onChange={handleChange}></input>
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="seedDepth">How deep should the seeds be planted?</label>
                        <input type="text" id="seedDepth" name="seedDepth" placeholder="ex. 1/2 inch" onChange={handleChange}></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label htmlFor="plantImg">Do you have an image link for this plant?</label>
                        <input type="text" id="plantImg" name="plantImg" placeholder="Paste it here..." onChange={handleChange}></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label htmlFor="indoorStartCalc">How many weeks before the last frost should this plant be started indoors?</label>
                        <input type="text" id="indoorStartCalc" name="indoorStartCalc" placeholder="ex. 4 weeks"  onChange={handleChange}></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label htmlFor="outdoorStartCalc">How many weeks before the last frost should this plant be sown outdoors?</label>
                        <input type="text" id="outdoorStartCalc" name="outdoorStartCalc" placeholder="ex. 4 weeks" onChange={handleChange}></input>
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="sunlight">How much sun does the plant need?*</label>
                        <select id="sunlight" name="sunlight" onChange={handleChange}>
                            <option value="Full Sun">Full Sun</option>
                            <option value="Partial Sun">Partial Sun</option>
                            <option value="Partial Shade">Partial Shade</option>
                            <option value="Full Shade">Full Shade</option>
                        </select>
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="zones">In which zones can this plant grow? (Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.)</label>
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

export default withAuthenticationRequired(AddPlant, { onRedirecting: () => <Loading /> });