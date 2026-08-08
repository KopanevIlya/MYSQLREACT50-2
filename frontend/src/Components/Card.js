import React,{Component}from "react"
import Header from './components/Header'

export class Card extends Component {
    constructor(props) {
        super(props)
        this.starte={
            items:[
      {
          id:1,
          type:" Сумачка для торжеств",
          praice: 2000,
          description:"Вечерняя сумочка"

                },

             {
          id:2,
          type:" Чемодан для путешествий и отдыха",
          praice: 6000,
          description:"Чемодан"

                },

        {
          id:3,
          type:" Сумка для спортсменов",
          praice: 3000,
          description:"Спортивная сумка"

                },
            ]
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <items itemms={this.state.items}/>
            </div>
        )
    }
}
export default Card


