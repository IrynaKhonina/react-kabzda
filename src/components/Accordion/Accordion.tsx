

type AccordionPropstype = {
    titleValue: string
}

export function Accordion (props: AccordionPropstype){
    return(
      <div>
        <AccordionTitle title ={props.titleValue}/>
        <AccordionBody/>
      </div>
    );
  }
  
type AccordionTitlePropsType = {
    title: string
}


  function AccordionTitle(props: AccordionTitlePropsType){
    return (
  
  <h3>{props.title}</h3>
  
    );
  }
  

 
  function AccordionBody(props: any){
    return (
  
      <ul>
          <li>
            1
          </li>
          <li>
            2
          </li>
          <li>
            3
          </li>
                 
        </ul>
  
    );
  }
  