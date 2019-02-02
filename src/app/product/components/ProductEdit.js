import React, {Component} from "react";
import PropTypes from "prop-types";


export default class ProductEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {
                
            }
        }
    }
    
    componentDidMount() {

        this.para1.textContent = "from ref";
        this.input.focus();

        //url -- browser
        //path - Routes.js
        //params -- dynamic values
        console.log(this.props.match);

        let id = this.props.match.params.id;

        if (id) {
            // bindAction method, automatically dispatch
            
            // ES6, promise as it is
            // this.props.actions.getProduct(id);
            
            // ES8, with async, await keyword
            this.props.actions.getProductByAsync(id);
        } else {
            this.props
                .actions.updateProduct({
                    name: '',
                    year: 2010
                })
        }

    }

    changeValue(e) {
        let {name, value} = e.target;
        

 
        let product = Object.assign({}, 
                            this.props.product, 
                            {[name]: value});

        this.props.actions.updateProduct(product);

        console.log(name, value, e.target.validity.valid);
    }

    saveProduct(e) {
        //stop browser from submit form
        e.preventDefault();



        this.props.actions
            .saveProduct(this.props.product);
    }
    
    render() {
        let {product, 
             brand,
             brands } = this.props;
        return (
            <div> 
            <h2>{this.context.appTitle}</h2>

            <h2>Product Edit - {this.props.match.params.id}</h2>
            
            <p ref={(elem) => this.para1 = elem} >
                Edit details here
            </p>

            <p>Brand ID {product.brandId} </p>

            <p>Brand Name {brand.name} </p>

            <form onSubmit={(e) => this.saveProduct(e)}  >
                Name
                <input name="name" 
                 ref={(elem) => this.input = elem}
                        onChange= { (e) => this.changeValue(e) }
                       value={this.props.product.name}
                       
                        minLength="3"
                       
                        />


                Price
                <input name="price" 
                        onChange= { (e) => this.changeValue(e) }
                       value={this.props.product.price} />

                Year
                <input name="year" 
                        onChange= { (e) => this.changeValue(e) }
                       value={this.props.product.year} />

                
                Brand 
                <select name="brandId"
                        onChange={ (e) => this.changeValue(e)}
                        value={product.brandId}>
                        
                    {
                        brands.map(brand => (
                            <option value={brand.id}
                                   key={brand.id}>
                                    {brand.name}
                            </option>
                        ))
                    }        
                        
                </select>

                <button type="submit">
                    Save
                </button>

            </form>
            
            
            
            </div>
        )
    }
} 


ProductEdit.defaultProps = {
    product: {}   
}

ProductEdit.propTypes = {
    product: PropTypes.object
}


    //ES.Next
ProductEdit.contextTypes = {
        appTitle: PropTypes.string
}
   