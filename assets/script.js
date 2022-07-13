// <!--per creare un nuovo componente in react-->

// var HelloWord = () => {
//     var terra = 'Terra';
//     var mercurio = 'Mercurio'
//     return (
//         <div>
//             <p className="background-color-red">Ciao pianeta {terra}</p>
//             <p className="background-color-cyan">come te la passi su {mercurio} ?</p>
//         </div>
//     )           
// }

 // qua invece uso l'stanza reactDOM con il metodo render che serve per visualizzare e ad assegnare al file html il mio componente react
//il metodo render accetta due parametri uno è il componente , l'altro è l'elemento con l'id a cui vogliamo appendere questo componente

// ReactDOM.render(<HelloWord config ={configurazione} carota = {'genoveffa'} />, document.getElementById('root'))





//componente di tipo classe
// const configurazione = {
//     prima : 'mortadella',
//     seconda : 'rosetta'
// }
// //prima abbiamo creato un componente di tipo classe con questa sintassi, poi abbiamo assegnato un props(proprietà) come classe 
// //al tag p attraverso className={this.prop.}
// class HelloWord extends React.Component{
//     render(){
//         return (
//         <div>
//             <p className ={this.props.config.prima} >Buongiorno salumiere.</p>
//             <p class={this.props.config.seconda}>Una rosetta con la mortadella,grazie!</p>
//             <p>un attimoo {this.props.carota}</p>
//         </div>
//         )
//     }
// }


// ReactDOM.render(<HelloWord config ={configurazione} carota = {'genoveffa'} />, document.getElementById('root'))

const identita = { nome : 'Mara', cognome :'Maionchi', eta:81}
var musica = 'metal';


const ImgProfile = function(attributi){
    return(
    <div className="profile-component">
        <img src="/assets/img/maionchi.png" title="foto profilo" alt="foto profilo" width={attributi.configImg.larghezza}/>
    </div>
    );
}

class Person extends React.Component{
    constructor(attributi){
        super(attributi)
        //con this.state dichiaro una proprietà mutevole a differenza delle altre proprietà
        this.state ={peso : 75 , occupazione: "agitatrice della masse"}
        this.inputRef = React.createRef();
        this.inputProfessione = React.createRef();

    }
    inviaForm(event){
        var valore = this.inputRef.current.value
        var lavoro = this.inputProfessione.current.value
        this.setState({peso : valore, occupazione:lavoro})
        event.preventDefault()
    }

    render(){
        const nomeCognome = this.props.anagrafica.nome +" "+ this.props.anagrafica.cognome;
        return(
        <div className="persona-component">
            <ImgProfile configImg={{titolo: nomeCognome, larghezza: '400'}}/>
            <h1>Anagrafica Persona</h1>
            <h2>{this.props.anagrafica.nome}</h2>
            <h2>{this.props.anagrafica.cognome}</h2>
            <h2>Anni {this.props.anagrafica.eta}</h2>
            <p>Ascolta {this.props.genere}</p>
            {/* qua reinderizzo lo stato di questo componente mutevole */}
            <h2>pesa kili {this.state.peso}</h2>
            <p>Professione {this.state.occupazione}</p>
            <hr />
            <form onSubmit={this.inviaForm.bind(this)}>
                <label>Peso</label>
                <input type="text" ref={this.inputRef}/><br />
                <label>Professione</label>
                <input type="text" ref={this.inputProfessione}/><br />
                <button type="submit">Click me</button>
            </form>
        </div>
        )
    }
}
ReactDOM.render(<Person anagrafica={identita} genere={musica} />, document.getElementById('root'))