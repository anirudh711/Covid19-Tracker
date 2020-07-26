import React from 'react';
import {Cards, Charts , CountryPicker} from './components'
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component{
    state={
        data:{},
        country:''
    }
    async componentDidMount(){
        const fetchedData =await fetchData();
        console.log(fetchedData)
        this.setState({data:fetchedData})
    }
    handleCountryChange=async(country)=>{
        const fetchedData=await fetchData(country);
        console.log(fetchedData)
        if(fetchedData)
            this.setState({data:fetchedData, country:country})
        else   
            console.log("undefined max")
    }
    render(){
        const {data,country}=this.state;
        return(
            <div className={styles.container}>
                <img  className={styles.image} alt ="COVID-19" src="https://i.ibb.co/7QpKsCX/image.png"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
               
            </div>
        )
    }
}

export default App;
