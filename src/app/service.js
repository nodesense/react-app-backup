const API_END_POINT = "http://localhost:7070";

//for slow response
//const API_END_POINT = "http://localhost:7070/delayed";

function fetchJson(url) {
    return fetch(url)
           .then ( response =>  {
               console.log(response);
               
               

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

//return a promise
export function fetchProducts() {
    return fetchJson(API_END_POINT + "/api/products")
}