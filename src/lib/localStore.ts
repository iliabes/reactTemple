


export function setLocalItem(name:string, value:string ):void {
    localStorage.setItem(name, JSON.stringify(value));
}


export function getLocalItem(name:string): any | undefined {
  if(localStorage.getItem(name)){
    return JSON.parse(localStorage.getItem(name)) 
  }else{
    return undefined
  }
  
}





