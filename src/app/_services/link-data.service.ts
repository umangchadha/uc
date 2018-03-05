import { Injectable } from '@angular/core';

@Injectable()
export class LinkDataService {
  linkData;
  constructor() { }
 

  linkClicked(data){
    this.linkData=data;

  }

  getlinkedData()
  {
    return this.linkData
  }
}
