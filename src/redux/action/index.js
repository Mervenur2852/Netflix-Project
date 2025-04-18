import api from "../../utils";
import ActionTypes from "../actionTypes";
const getWatchList = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LIST_LOADING });
    api.get(`/account/21861021/watchlist/movies`).then((res) =>
      dispatch({
        type: ActionTypes.LIST_SUCCESS,
        payload: res.data.results,
      }).catch((err) =>
        dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
      )
    );
  };
};

const toggleList = (movie, isAdd) => {
  return (dispatch) => {
    const body = {
      media_type: "movie",
      media_id: movie.id,
      watchlist: isAdd,
    };

    api
      .post(`/account/21861021/watchlist`, body)
      .then(() =>
        isAdd
          ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
          : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie })
      )
      .catch((err) => {
        console.log(err);
      });
  };
};

export { getWatchList, toggleList };
