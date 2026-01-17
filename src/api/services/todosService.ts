import { RestClient } from "../restClient";
import { APIRequestContext } from "@playwright/test"; 
import { TODOS } from "../endpoints"; 


export class TodosService {
    private client : RestClient;

    constructor(request: APIRequestContext) {
        this.client = new RestClient(request);
    } 

    getAll(){
        return this.client.get(TODOS);
    }

    getById(id: number){
        return this.client.get(`${TODOS}/${id}`);   
    }

    create(body: object){
        return this.client.post(TODOS, body);
    }

    update(id: number, body: object){
        return this.client.put(`${TODOS}/${id}`, body);
    }

    delete(id: number){
        return this.client.delete(`${TODOS}/${id}`);
    } 

    patch(id: number, body: object){
        return this.client.patch(`${TODOS}/${id}`, body);       
    }
    
}
    