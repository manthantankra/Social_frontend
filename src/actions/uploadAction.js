import * as UploadApi from '../api/uploadRequest'

export const uploadImage = (data) => async (dispatch) => {
    try {
        await UploadApi.uploadImg(data);
    } catch (error) {
        console.log(error);
    }
}

export const uploadPost = (data) => async (dispatch) => {
    dispatch({type: "UPLOAD_START"});
    try {
        const newPost = await UploadApi.uploadPost(data);
        dispatch({type: "UPLOAD_SUCCESS", data: data});
    } catch (error) {
        console.log(error);
        dispatch({type: "UPLOAD_FAIL"});
    }
}