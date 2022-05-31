import "./index.scss";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_PLANT } from "../../utils/queries";
import { useAuth0 } from "@auth0/auth0-react";

const SinglePlant = () => {
  const { plantId } = useParams();
  console.log(JSON.stringify(plantId));

  const { isAuthenticated, user } = useAuth0();

  const { loading, error, data } = useQuery(QUERY_SINGLE_PLANT, {
    variables: { plantId: plantId },
  });
  console.log(data);
  if (!data) {
    return <p>Loading...</p>;
  }
  const plantData = data.getSinglePlant;
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
              Edit Plant
            </button>
          )}
          {/* edit will need to link to a form similar to add plant that allow editing of details - we could limit what details can be edited */}
          {isAuthenticated && (
            <button class="plantBtn" id="deleteBtn" type="submit">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePlant;
