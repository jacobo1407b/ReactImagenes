import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
import Imagen from './componentes/Imagen';
import './App.css';

class App extends Component
{
  state = {
    termino :'',
    imagenes : [],
    pagina: ''
  }
  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }
  paginaAnterior = () =>{
    let pagina = this.state.pagina;
    if(pagina==1) return null;
    pagina-=1;
    this.setState({
      pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    });
     console.log(pagina);
  }
  paginaSiguiente = () =>{
    let pagina = this.state.pagina;
    pagina+=1;
    this.setState({
      pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    });
     console.log(pagina);
  }
  consultarApi = () => {
    const ter = this.state.termino;
    const pagina = this.state.pagina;
     const url =  `https://pixabay.com/api/?key=13401478-5d26843f0095f567007b1a642&q=${ter}&per_page=35&page=${pagina}`;
    console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ imagenes : resultado.hits }))
  }
  datosBusqueda = (termino) =>{
  this.setState({
    termino : termino,
    pagina : 1
  }, () => {
    this.consultarApi();
  })
  }
  
render() {
  return (
    <div className="container App">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Buscador
          datosBusqueda={this.datosBusqueda}
        />
      </div>
      <div className="roe justify-content-center">
      <Resultado
      imagenes = {this.state.imagenes}
      paginaAnterior={this.paginaAnterior} 
      paginaSiguiente={this.paginaSiguiente}
      />
      </div>
    </div>
  );
}
}

export default App;
