const api = 'http://10.92.198.18:3002/api/apppedidos/'


export const ApiService ={

    get(endpoint){
       return fetch(`${api}${endpoint}`)
        .then(Response => Response.json())
    },

    post(endpoint, data){
        return fetch(`${api}${endpoint}`,{

            method: 'POST', 
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })

        .then(response => response.json())
    }
}