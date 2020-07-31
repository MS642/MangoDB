import axios from "axios";
import { addAlert } from "actions/alerts";
import { fetchUserProfile } from "./profileActions";

const STORE_URI = "/store/";

export const purchaseBadgeRequest = (transaction) => {
  return {
    type: "PURCHASE_BADGE_REQUEST",
    payload: transaction,
  };
};

export const purchaseBadge = (transaction) => {
  return (dispatch) => {
    dispatch(purchaseBadgeRequest(transaction));
    axios
      .put(
        STORE_URI.concat(`badge/purchase/${transaction.userID}`),
        transaction
      )
      .then(() => {
        dispatch(addAlert(200, "Badge purchased!"));
        dispatch(fetchUserProfile(transaction.userID));
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
