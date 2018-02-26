//a fetch polyfill to make fetch to work with older browser
//to know list of browsers and versions that include native fetch 
//https://caniuse.com/#search=Fetch
import "whatwg-fetch";

//options helps to include method, headers and body element
//refer https://github.com/github/fetch
function fetchJson(url, options = undefined) {

    let token = window.localStorage.token;
    //if token exists, add to auth header

    if (token) {
        options = options || { headers: {}};

        options.headers = Object.assign(options.headers, {"Authorization": `JWT ${token}`});
        console.log("options ", options);
    }

    console.log("Reaching");
    return fetch(url, options)
           .then ( response =>  {
               console.log("response is ", response);
             
               //best practice
               //check for response.status == 400, 403, 404, and show custom error

               if (response.status == 400)
               throw new Error( "bad request, check token or token expired");

               if (response.status == 404)
                throw new Error("Resource not found");

                if (response.status == 403)
                 throw new Error("Not permitted, auth needed");

                //generic
                if (response.state >= 400 && response.status < 500) {
                    throw new Error("client error");
                }

                if (response.status >= 500)
                    throw new Error("Server error ");

                if (response.status == 0)
                    throw new Error("Check network connection ");

              //since we can't know exact error
               if (!response.ok) {
                throw new Error("Request failed");
               }
               
               return response.json()
           })
           
           //response.json() returns a promise
}
 
export function getJson(url, options) {
    return fetchJson(url, options);
}


export function postJson(url, data, headers = undefined) {
    return fetchJson(url, {
        method: 'POST',
        headers: Object.assign({
                    'Content-Type': 'application/json'
                 }, headers),
        body: JSON.stringify(data)
    })
}


export function putJson(url, data, headers = undefined) {
    return fetchJson(url, {
        method: 'PUT',
        headers: Object.assign({
                    'Content-Type': 'application/json'
                 }, headers),
        body: JSON.stringify(data)
    })
}

export function deleteJson(url) {
    console.log("deleting ", url);

    return fetchJson(url, {
        method: 'DELETE'
    })
}