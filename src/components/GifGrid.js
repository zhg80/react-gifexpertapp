//import React, {useState, useEffect} from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    console.log(loading);

/*    const [images, setImages] = useState([]);

    useEffect( () =>{
        //getGifs();
        getGifs(category)
            .then( imgs => setImages(imgs));
    }, [category])
*/
    /*
    const getGifs = async() => {

        //const url = 'https://api.giphy.com/v1/gifs/search?limit=10&q=Rick+and+Morty&api_key=TEIFDVY5ulWzqSEAp0kLepuEqWPacwaC';
        const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=TEIFDVY5ulWzqSEAp0kLepuEqWPacwaC`;
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        //console.log(data);
        console.log(gifs);
        setImages( gifs );
    }
*/
    //getGifs();


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading ? <p className="animate__animated animate__flash">Loading..</p>: <p>Data cargada</p>}
            <div className="card-grid">
                    {
                        images.map( img => (
                        // <li key = {id} > { title } </li>
                        <GifGridItem 
                                key = {img.id}
                                {...img}
                            />
                        ))
                    }
                
            </div> 
            
        </>
    )
}
