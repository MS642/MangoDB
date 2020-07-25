import axios from "axios";
import { addAlert } from "actions/alerts";
import { fetchUserProfile } from "./profileActions";

const STORE_URI = "/store/";

export const purchaseBadgeRequest = () => {
  // for future loading state processing
  return {
    type: "PURCHASE_REQUEST",
  };
};

export const purchaseSuccess = () => {
  // for future loading state processing
  return {
    type: "PURCHASE_SUCCESS",
  };
};

export const purchaseBadge = (transaction) => {
  return (dispatch) => {
    dispatch(purchaseBadgeRequest());
    axios
      .put(
        STORE_URI.concat(`badge/purchase/${transaction.userID}`),
        transaction
      )
      .then(() => {
        dispatch(addAlert(200, "Badge purchased!"));
        dispatch(fetchUserProfile(transaction.userID));
        dispatch(purchaseSuccess());
      })
      .catch((error) => {
        dispatch(
          addAlert(
            error.status,
            "Sorry, purchase failed. Please try again later."
          )
        );
      });
  };
};
