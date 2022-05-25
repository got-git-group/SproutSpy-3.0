import bg from '../../assets/images/addplant.jpg';
import './index.scss';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../../utils/loading';

const AddPlant = () => {
    return (
        <>
            <img src={bg} alt='' className='backgroundImage'>
            </img>
        </>
    )
}

export default withAuthenticationRequired(AddPlant, { onRedirecting: () => <Loading /> });