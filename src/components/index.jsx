import React, { Component, Proptypes } from 'react'

class App extends Component{
    constructor(...props ){
        super(...props)

        this.state = {
            courses:[
                { id:1, name: 'React desde cero', teacher:'Jonathan MirCha'},
                { id:2, name: 'Drupal 8 desde cero', teacher:'Alberto Quiroga'},
            ]
         }
    }

    render(){
        return(
            <div>
                <form>
                 <input type="text"  placeholder="Nombre del Curso" name="name" require />
                 <input type="text"  placeholder="Profesor" name="teacher" require />
                 <input type="hidden" name="id" value={Math.floor(Math.random()*100)} />
                 <input type="submit" value="Guardar"/>
                </form>
                <ul>
                    <li>Curso 1</li>
                    <li>Curso 2</li>
                </ul>
            </div>
            
        )
    }
}

App.propTypes = {}

App.defaultProps ={}

export default App
