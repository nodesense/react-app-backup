import config from "config";

import * as restful from "../core/restful";


export function getProducts() {
    return restful.getJson(config.apiEndPoint + "/api/products")
}

//GET /api/products/12345
export function  getProduct(id) {
    return restful.getJson(config.apiEndPoint + "/api/products/" + id)
}

export function getBrands() {
        return restful.getJson(config.apiEndPoint + "/api/brands")
}

export function searchProducts(q) {
    return restful.getJson(config.apiEndPoint + "/api/products?q=" + q)
}
 
export function updateProduct(product) {
    return restful.putJson(config.apiEndPoint + '/api/products/' 
                         + product.id, product)
}

//create new
export function createProduct(product) {
        return restful.postJson(config.apiEndPoint +'/api/products',
                                product)
}

export function saveProduct(product) {
        if (product.id)
            return updateProduct(product);
        
        return createProduct(product);
}