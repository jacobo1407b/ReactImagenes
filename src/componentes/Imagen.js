import React, { Component } from 'react';

const Imagen = (props) => {
    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;
   return(
         <div className="col-12 col-sm6 col-md-4 col-lg-3 mb-4">
             <div className="card">
                 <img src={previewURL} alt={tags} className="card-img-top"/>
                 <div className="card-body">
                     <p className="card-text">{likes}Me gusta</p>
                     <p className="card-text">{views}Vistos</p>
                     <a href={largeImageURL} target="_blank" className="btn btn-success btn-block">Ver imagen</a>
                 </div>
             </div>
         </div>
   );
}
export default Imagen