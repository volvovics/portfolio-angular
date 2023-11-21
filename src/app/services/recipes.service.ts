import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  private url:string = 'https://api.spoonacular.com/recipes/complexSearch';
  private apiKey = environment.apiUrl;
  private params:any = new HttpParams;
  private headers:HttpHeaders = new HttpHeaders;
   
  private searchString:string = '';
  private searchLimit:number = 5;
  private searchOffset:number = 0;
  private recipes:Array<any> = [];

  public init(){
    console.log('recipe service initialized')
    
    this.headers = this.headers.append('x-api-key', this.apiKey);
    this.params = this.params.append('query','');
    this.params = this.params.append('number',0);
    this.params = this.params.append('offset',0);
  }

  setSearchLimit( newLimit:number ){
    this.searchLimit = newLimit;
  }

  getRecipes( searchString:string, useOffset?:boolean){
    // if new search set offset to 0;
    if (!useOffset) this.searchOffset = 0;

    this.searchString = searchString;
    
    this.setParams();

    // increase offset by the searchLimit to resume search on the next call;
    this.searchOffset += this.searchLimit;
    
    return this.http.get(this.url ,{ headers:this.headers, params:this.params});
  }

  getMore(){
    this.getRecipes(this.searchString, true);
  }

  setParams(){
    this.params = this.params.set('query',this.searchString);
    this.params = this.params.set('number',this.searchLimit);
    this.params = this.params.set('offset',this.searchOffset);
    console.log(this.params);
  }
}