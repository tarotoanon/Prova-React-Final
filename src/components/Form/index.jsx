import React, {useState} from 'react'


function AgendaForm (props) {
    const [state,setState] = useState({
        Name:'',
        Email:'',
        CelPhone:'',
        Data:'',
        Check:'',
        

    })

    function handleChange  (e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]:value
        })
        console.log(state) }

return(
    <form onSubmit={console.log(state)} >
        <h4>Cadastrar Contato</h4> 
        <label htmlFor='Name'>Nome</label>
        <input type='text' name="Name" value={state.Name} onChange={handleChange}/>

        <label htmlFor='Email'>Email</label>
        <input type='Email' name="Email" value={state.Email} onChange={handleChange}/>

        <label htmlFor='CelPhone'>Celular</label>
        <input type='text' name="CelPhone" value={state.CelPhone} onChange={handleChange}/>

        <label htmlFor='Data'>Data de nascimento</label>
        <input type='text' name="Data" value={state.Data} onChange={handleChange}/>

        <label htmlFor='Check'>Noticias</label>
        <input type='text' name="Check" value={state.Check} onChange={handleChange}/>

        <input type="submit"/>
    </form>
)
}

export default AgendaForm