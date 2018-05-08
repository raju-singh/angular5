import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   // "Access-Control-Allow-Headers":"*",
   // "Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"
  })
};

@Injectable()
export class ConfigService {
	constructor(private http: HttpClient) { }

	postData(url:string, reqData:any){
		console.log("Request URL==",reqData);
		return this.http.post(url, reqData, httpOptions).map((res:Response) => res);
		    
	}

	getData(url){
		return this.http.get(url).map((res:Response) => res);
	}

	deleteData(url:string, reqData:any){
		let endPoint = `${url}/${reqData}`
		return this.http.delete(endPoint, httpOptions);
	}

	patchData(url:string, data:any){
		return this.http.put(url, data, httpOptions).map((res:Response) => res);
	}
	saveDataToLocalStorage(key:string, value:string){

	}
	getDataFromLocalStorage(key:string){
		
	}
}