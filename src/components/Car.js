import React from "react";

class Car extends React.Component{
    
    render() {
        // console.log(this.props.imageURl,"inside car component");  
        const {imageURl, name, description, productType} = this.props
        return(
            
            <div className="all">
                {/* {console.log(this.props)} */}
                <div>
                    {/* <img src={this.props.imageURl}
                    className="first_image" 
                    alt="Merceds"
                    width="300px"
                    /> */}
                    <div>
                        <div className="Texts">
                            <p className="Header">{name}</p>
                            <p className="Luxury">{productType}</p>
                            <p className="Luxury">{description}</p>
                            {/* <img src={imageURl} /> */}
                        </div>
                    </div>
                </div>
            </div>
            
        )

    }
}
export default Car