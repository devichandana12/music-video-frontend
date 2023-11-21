// import the axios library

import axios from "axios";


//  function definition of commonrequest

export const commonrequest =async(method, url, body) => {

    // request configuration

    // important request configurations

    let reqConfig = {

        // `url` is the server URL that will be used for the request
        url,

        // `method` is the request method to be used when making the request
        //   method: 'get', // default
        method,

        //`data` is the data to be sent as the request body
        // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
        data: body,

        //not compulsory  `headers` are custom headers to be sent
        Headers: {
            "content-type": "/application/json"   //--> for normal data
            // if the content-type is multipart data which means the parssing data conatin  files and images
        }
    }

    // api call using axios library

  return await axios(reqConfig).then((response) => {
        return response

    }).catch((error)=>{
        return error
    })



}