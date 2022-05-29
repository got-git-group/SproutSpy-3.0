import bg from '../../assets/images/addplant.jpg';
import './index.scss';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../../utils/loading';
import Select from 'react-select';
import { useQuery } from '@apollo/client';
import { QUERY_ZONES } from '../../utils/queries';

// const CustomSelectComponent = ({ value, options, onSelect }) => {
//     return (
//       <Select
//         value={value}
//         options={options}
//         isMulti
//         onChange={onSelect}
//       />
//     );
// };

const AddPlant = () => {
    // const zones = [];
    const { loading, error, data } = useQuery(QUERY_ZONES);
      console.log(data);
      if (!data) {
          return <p>Loading...</p>;
      };
    // data.zones.map((zone) => (zones.push({value: zone._id, label: zone.zoneName})));

    return (
        <div id="addPlant">
            {/* <img src={bg} alt='' className='backgroundImage'>
            </img> */}
            <div id="formWrapper">
                <form id="plantForm">
                    <h1>Add a Plant to the Database</h1>
                    <div className="inputWrapper">
                        <label for="plantName">Plant Name</label>
                        <input type="text" id="plantName" name="plantName" placeholder="Plant name.."></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label for="spacing">How much space does the plant need?</label>
                        <input type="text" id="spacing" name="spacing" placeholder="ex. 15 inches"></input>
                    </div>

                    <div className="inputWrapper">
                        <label for="seedDepth">How deep should the seeds be planted?</label>
                        <input type="text" id="seedDepth" name="seedDepth" placeholder="ex. 1/2 inch"></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label for="plantImg">Do you have an image link for this plant?</label>
                        <input type="text" id="plantImg" name="plantImg" placeholder="Paste it here..."></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label for="indoorStartCalc">How many weeks before the last frost should this plant be started indoors?</label>
                        <input type="text" id="indoorStartCalc" name="indoorStartCalc" placeholder="ex. 4 weeks"></input>
                    </div>
                    
                    <div className="inputWrapper">
                        <label for="outdoorStartCalc">How many weeks before the last frost should this plant be sown outdoors?</label>
                        <input type="text" id="outdoorStartCalc" name="outdoorStartCalc" placeholder="ex. 4 weeks"></input>
                    </div>

                    <div className="inputWrapper">
                        <label for="sunlight">How much sun does the plant need?</label>
                        <select id="sunlight" name="sunlight">
                            <option value="Full Sun">Full Sun</option>
                            <option value="Partial Sun">Partial Sun</option>
                            <option value="Partial Shade">Partial Shade</option>
                            <option value="Full Shade">Full Shade</option>
                        </select>
                    </div>

                    <div className="inputWrapper">
                        <label for="zones">In which zones can this plant grow? (Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.)</label>
                        <select name="zones" id="zones" multiple>
                            {data.zones.map((zone) => (
                                <option key={zone._id} value={zone._id}>{zone.zoneName}</option>
                            ))}
                    </select>
                    </div>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            
        </div>
    )
}

export default withAuthenticationRequired(AddPlant, { onRedirecting: () => <Loading /> });