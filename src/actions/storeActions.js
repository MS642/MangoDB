import axios from "axios";
import { addAlert } from "actions/alerts";
import { AlertType } from "reducers/alertReducer";
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
        dispatch(addAlert(AlertType.SUCCESS, "Badge purchased successfully!"));
        dispatch(fetchUserProfile(transaction.userID));
      })
      .catch((err) => {
        console.error(err);
        dispatch(
          addAlert(
            AlertType.WARNING,
            "Sorry, your purchase failed. Please try again later."
          )
        );
      });
  };
};
