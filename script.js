// <!--per creare un nuovo componente in react-->

var HelloWord = () => {
    var pianeta = 'Terra';
    var mercurio = 'Mercurio'
    const testoRosso = {color:"red"}
    return (
        <div style = {{color:"red"}}>
            <p>Ciao pianeta {pianeta}</p>
            <p>come te la passi su {mercurio} ?</p>
        </div>
    )
}

 // qua invece uso l'stanza reactDOM con il metodo render che serve per visualizzare e ad assegnare al file html il mio componente react
    //il metodo render accetta due parametri uno è il componente , l'altro è l'elemento con l'id a cui vogliamo appendere questo componente
ReactDOM.render(<HelloWord />, document.getElementById('root'))
