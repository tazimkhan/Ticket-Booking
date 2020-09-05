import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class TicketDetailsService {
  public reserve;
  public Id;
  public scrn1;
  constructor(private webReqService:WebRequestService) { }
  getScrnFromDB(){
      return  this.scrn1=this.webReqService.get('seatInfo');
  }

  updateScrnInDB(id: string, screen: object){
      return this.webReqService.patch(`updates/${id}`,screen)
  }

reserveInfo(){
    return this.reserve
}

reserveSeatInfo(reserveInfo){
    if(reserveInfo.size==0){
        this.reserve=[];
    }else{
    var arr=[];
        for( let [key,value] of reserveInfo){
            arr[key]=value
        }
        this.reserve=arr;
    }
}
  getId(id){
    this.Id=id.toString();
  }

  getScrn(scrn3){
      this.scrn1=scrn3;
  }

  //to check available seat
  availSeat(scrn2){
        let count=0;
        for(let key in scrn2){
            let len=scrn2[key].length;
            for(let i=0;i<len;i++){
                if(scrn2[key][i]==false){
                    count=count+1;
                }
            }
        }
        return count;
    }

  toBookSeat(n,scrn){
    var avail=this.availSeat(scrn);
    var reserveInfo=new Map();
    if(n>avail){
        return reserveInfo;
        console.log('You can reserve maximum ' + avail +' seat only');
    }else{
        // priority seat reserve in one row
        
        var availInfo=new Map();
        var maxAvailSeat=0;
        var maxAvailSeatRow='';
        for(let key in scrn){
            let count1=0;
            let len1=scrn[key].length;
            // check no of blank seat
            for(let j=0;j<len1;j++){
                if(scrn[key][j]==false){
                    count1++;
                }
            }
            // if required seat available in perticular row then book them
            if(count1>=n && n>0){
                reserveInfo.set(key,[]);
                for(let f=0;f<len1;f++){
                    if( (n>0) && (scrn[key][f]==false))
                    {    
                        scrn[key][f]=true;
                        reserveInfo.get(key).push(f+1);
                        n--;
                        count1--;
                    }
                } 
            }
            // find max blank seat in total scrn
            if(maxAvailSeat<count1){
                maxAvailSeat=count1;
                maxAvailSeatRow=key;
            }
            availInfo.set(key,count1);
        }

        // if n seat are book in one row then send back info
        if(n==0){ 
            return reserveInfo;
        }

        /*  if seat is not available in one row  */
        reserveInfo.set(maxAvailSeatRow,[]);
        for(let i=0;i<scrn[maxAvailSeatRow].length;i++){
            if(scrn[maxAvailSeatRow][i]==false){
                scrn[maxAvailSeatRow][i]=true;
                reserveInfo.get(maxAvailSeatRow).push(i+1);
                var w=availInfo.get(maxAvailSeatRow)-1;
                availInfo.set(maxAvailSeatRow,w);
                n--;
            }
        }
        var check=maxAvailSeatRow.charCodeAt(0);
        var n1=1,n2=1;
        while(n>0){
            if( (check+n1)<=76 && (n>0)){
                var row1=String.fromCharCode(check+n1);
                if(availInfo.get(row1)>0){
                    reserveInfo.set(row1,[]);
                    for(let j=0;j<scrn[row1].length;j++){
                        if((scrn[row1][j]==false) && (n>=1)){
                            scrn[row1][j]=true;
                            reserveInfo.get(row1).push(j+1);
                            n--;
                        }
                    }
                }
                n1++;
            }
            if( (check-n2)>=65 && (n>0)){
                var row2=String.fromCharCode(check-n2);
                if(availInfo.get(row2)>0){
                    reserveInfo.set(row2,[]);
                    for(let j=0;j<scrn[row2].length;j++){
                        if((scrn[row2][j]==false) && (n>=1)){
                            scrn[row2][j]=true;
                            reserveInfo.get(row2).push(j+1);
                            n--;
                        }
                    }
                }
                n2++;
            }
        }
        return reserveInfo
    }
}

    
}
