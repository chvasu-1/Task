import React from 'react'
import { useEffect,useState } from 'react'

const Datashow = () => {
    const[data,setData]=useState([]);
    console.log(data)
    
    useEffect(()=>{
     const fetchData = async () =>{
         const response = await fetch('https://randomuser.me/api/?results=5')
         const data = await response.json();
         console.log(data)
         setData(data.results)
     }
     fetchData();

    },[])
  return (
    <div className='parent'>
        {
            data&& data.map((item)=>{
                return(
                    <div key= {item.id.value} className='cards'>
                        <div className='avatar'>
                        <img src={item.picture.thumbnail}/>
                        
                        </div>   
                        <div className='cardBody'>
                            <h1>{`${item.name.title} ${item.name.first} ${item.name.last}`}</h1>
                            <h5>{item.gender}</h5>
                        </div>    
                    
                    
                    </div>
                )
            })
        }

     
    </div>
  )
}

export default Datashow