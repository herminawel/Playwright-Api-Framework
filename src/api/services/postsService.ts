import { RestClient } from "../restClient";
import { APIRequestContext } from "@playwright/test"; 
import { POSTS } from "../endpoints"; 


export class PostsService {
    private client : RestClient;

    constructor(request: APIRequestContext) {
        this.client = new RestClient(request);
    } 

    getAll(){
        return this.client.get(POSTS);
    }

    getById(id: number){
        return this.client.get(`${POSTS}/${id}`);   
    }

    create(body: object){
        return this.client.post(POSTS, body);
    }

    update(id: number, body: object){
        return this.client.put(`${POSTS}/${id}`, body);
    }

    delete(id: number){
        return this.client.delete(`${POSTS}/${id}`);
    } 

    patch(id: number, body: object){
        return this.client.patch(`${POSTS}/${id}`, body);       
    }
    
}