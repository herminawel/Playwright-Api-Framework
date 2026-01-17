import { RestClient } from "../restClient";
import { APIRequestContext } from "@playwright/test"; 
import { USERS } from "../endpoints"; 


export class UsersService {
    private client : RestClient;

    constructor(request: APIRequestContext) {
        this.client = new RestClient(request);
    } 

    getAll(){
        return this.client.get(USERS);
    }

    getById(id: number){
        return this.client.get(`${USERS}/${id}`);   
    }

    create(body: object){
        return this.client.post(USERS, body);
    }

    update(id: number, body: object){
        return this.client.put(`${USERS}/${id}`, body);
    }

    delete(id: number){
        return this.client.delete(`${USERS}/${id}`);
    } 

    patch(id: number, body: object){
        return this.client.patch(`${USERS}/${id}`, body);       
    }
    
}
    