import React from "react";
import Car from './Car'


// let cars = ["Mercedes", "BMW", "Audi", "Volvo", "Porsche"];
class CarList extends React.Component{  // create my first component

    render(){
       
        // return <ul>
        // {cars.map((item, index)=> {
        //     return <li>{item}</li>
        // })}
        // </ul>
        
        // return <ul>
        //     {cars.map((item, index) =>{
        //         return <li key={index}>{item + " Cars"}</li>
        //     })}
        // </ul>

        // cars.map(function(currentValue, index, arr)
        const car = {
            id:1,
            name:"Mercedes",
            description:"Keeping a head through technology",
            productType:"Luxury Vehicle",
            imageUrl:"https://cdn.jdpower.com/JDPA_2021%20Mercedes-Benz%20S-Class%20Black%20At%20Speed.jpg"
        }
        console.log(car.imageUrl,"out return");
       return( <div className="TheGrid">
      
             <Car
                // id={car.id}
                // name={car.name}
                // description={car.description}
                // productType={car.productType}
                // imageUrl={car.imageUrl}
                car={car}
             />
             
                

        </div>

        // console.log(imageURl,"imageURl");
        )
        
    }
}

export default CarList
