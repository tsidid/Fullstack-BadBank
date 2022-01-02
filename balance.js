function Balance(){
    const [show, setShow]      = React.useState(true);
    const [status, setStatus]  = React.useState(' ');

    return(
        <Card 
        bgcolor="info"
        header="Balance"
        status={status}
        body={show ?
            <BalanceForm setShow={setShow}/>:
                <BalanceMsg setShow={setShow}/>}
    /> 
    )
}

function BalanceMsg(props){
    return(<>
    <h5>Your balance has been sent to your email</h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() =>props.setShow(true)}>Back</button>
    </>);
}

function BalanceForm(props){
    const [email, setEmail]        = React.useState('');
    

    function handle(){
        console.log(email);
        const url = `/account/balance/${email}`;
        (async () => {
            var res  = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
        props.setShow(false);
    
    }
    return (<>

    Email address<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)}/><br/>

    
    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Show Balance</button>
    </>);
}
    