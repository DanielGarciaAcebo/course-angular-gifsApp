import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {GetGifsResponse} from "../interfaces/gifs.interfaces";

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private apiKey: string= "sRAzKijfMeY2rUP9eOEnpydYil3SjkPq"

  private serviceUrl :string= "https://api.giphy.com/v1/gifs"

  private _history : string[]= []
  public result: any[]=[]

  constructor(private http:HttpClient) {

    if (localStorage.getItem("histority")){
      this._history= JSON.parse(localStorage.getItem("histority")!)
    }

    if (localStorage.getItem("results")){
      this.result= JSON.parse(localStorage.getItem("results")!)
    }
  }

  get history(){
    return [...this._history]
  }


  searchGifs(query:string){

    query= query.trim().toLocaleLowerCase()

    if (query.trim().length===0){
      return
    }
    if(!this._history.includes(query)){
      this._history.unshift(query)
      this._history= this._history.slice(0,10)

      localStorage.setItem("histority",JSON.stringify(this._history))


    }

    console.log(this._history)

    const params = new HttpParams().set("api_key",this.apiKey).set("limit","10").set("q",query);

    this.http.get<GetGifsResponse>(`${this.serviceUrl}/search`,{params}).subscribe((response)=>{
      console.log(response.data)
      this.result=response.data
      localStorage.setItem("results",JSON.stringify(this.result))
    })
  }

}
