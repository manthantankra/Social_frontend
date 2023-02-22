import * as PostApi from '../api/postRequest.js'

export const getTimeLinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" });
    try {
        const { data } = await PostApi.getTimeLinePosts(id);
        console.log("data", data);
        dispatch({ type: "RETREIVING_SUCCESS", data: data });
    } catch (error) {
        dispatch({ type: "RETREIVING_FAIL" });
        console.log(error)

    }
}