import { BASE_URL } from "./baseurl";
import { commonrequest } from "./commonrequest";

// add video -->  api call setting
export const addVideo = async (body) => {

    return await commonrequest("POST", `${BASE_URL}/videos`, body)


}

// get videos  --> api call setting
export const getVideo = async () => {
    return await commonrequest("GET", `${BASE_URL}/videos`, "")
}
 
// deleting the card  

export const deleteVideo = async (id) => {
    return await commonrequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// add category
export const addCategory = async (body) => {
    return await commonrequest("POST", `${BASE_URL}/categories`, body)
}

// get categories

export const getallCategory = async()=>{
    return await commonrequest("GET",`${BASE_URL}/categories`,"")
}



// delete category


export const deleteCategory =async(id)=>{
    return await commonrequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}



// get history

export const getWatchHistory = async ()=>{
    return await commonrequest("GET",`${BASE_URL}/watch_history`,"")
}


// Add HIstory


export const addWatchHistory = async (body)=>{
    return await commonrequest("POST",`${BASE_URL}/watch_history`,body)
}



// drag--->   get videos details when dragging


export const getVideos = async (id) => {
    return await commonrequest("GET", `${BASE_URL}/videos/${id}`, "")
}

// to update card details in category section

export const updateCategory =async(id,body)=>{
    return await commonrequest("PUT",`${BASE_URL}/categories/${id}`,body)
}

