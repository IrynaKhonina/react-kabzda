
export function Rating (props: any){

   
    if(props.vlue === 1) {

        return(
            <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            </div>
           
          );
    }
    
    if(props.vlue === 2) {

        return(
            <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            </div>
           
          );
    }
    if(props.vlue === 3) {

        return(
            <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            </div>
           
          );
    }
    if(props.vlue === 4) {

        return(
            <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            </div>
           
          );
    }
    if(props.vlue === 5) {

        return(
            <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            </div>
           
          );
    }
   
        return(
            <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            </div>
           
          );
    
  }
  
  function Star (props: any){
    if(props.selected === true) {

    return <span><b>star </b></span>
      
    } else {
       return <span>star </span>   
     } 
    }