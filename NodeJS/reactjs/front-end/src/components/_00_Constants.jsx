export const CONSTANTS = {
    backEndUrl: "http://localhost:8082/api/movies",
    emptyMovieObj: { title: "", director: "", releaseYear: 0, genre: "", rating: 0, }

}

export const Util = {
    handleEditInputChange: (callBackFun, nameValueObj) => {
        const { name, value } = nameValueObj;
        callBackFun((prevObj) => ({
            ...prevObj,
            [name]: value,
        }));
    }
}