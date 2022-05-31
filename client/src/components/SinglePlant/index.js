import "./index.scss";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, useNavigate, Link } from "react-router-dom";
import { QUERY_SINGLE_PLANT } from "../../utils/queries";
import { REMOVE_PLANT } from "../../utils/mutations";
import { useAuth0 } from "@auth0/auth0-react";

const SinglePlant = () => {
  const { plantId } = useParams();
  console.log(JSON.stringify(plantId));

  const navigate = useNavigate();

  const { isAuthenticated, user } = useAuth0();
  const { loading, error, data } = useQuery(QUERY_SINGLE_PLANT, {
    variables: { plantId: plantId },
  });
  const [removePlant] = useMutation(REMOVE_PLANT);
  console.log(data);
  if (!data) {
    return <p>Loading...</p>;
  }
  const plantData = data.getSinglePlant;

  const handlePlantDelete = () => {
    console.log('Deleting: ', plantId);
    removePlant({ variables: { plantId: plantId } });
    navigate(-1);
  }

  return (
    <div id="singlePlantPage">
      <div id="plantWrapper">
        <h1 className="pName">{plantData.plantName}</h1>
        <img
          className="pImage"
          src={plantData.plantImg}
          alt={plantData.plantName}
        />
        <ul className="pDetails">
          <li>Spacing: {plantData.spacing}</li>
          <li>Seed Depth: {plantData.seedDepth}</li>
          <li>Sunlight: {plantData.sunlight}</li>
          <li>
            Weeks before(-)/after last Spring frost to sow outdoors:{" "}
            {plantData.outdoorStartCalc}
          </li>
        </ul>
        <div id="btnWrapper">
          {/* require login to click these buttons */}
          {isAuthenticated && (
            <button class="plantBtn" id="editBtn" type="button">
              <Link key={plantData._id} to={{
                pathname: `/plants/${plantData._id}/edit`,
              }}>Edit Plant</Link>
            </button>
          )}
          {/* edit will need to link to a form similar to add plant that allow editing of details - we could limit what details can be edited */}
          {isAuthenticated && (
            <button class="plantBtn" id="deleteBtn" type="submit" onClick={handlePlantDelete}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePlant;
