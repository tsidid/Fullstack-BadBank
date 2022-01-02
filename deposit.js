function Deposit(){
    const [show, setShow]      = React.useState(true);
    const [status, setStatus]  = React.useState(' ');


    return(
        <Card 
            bgcolor="warning"
            header="Deposit"
            status={status}
            body={show ?
                <DepositForm setShow={setShow}/>:
                <DepositMsg setShow={setShow}/>}
            />
    )
}

function DepositMsg(props){
    return(<>
    <h5>Deposit Successful</h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() =>props.setShow(true)}>Back</button>
    </>);
}

function DepositForm(props){
    const [email, setEmail]        = React.useState('');
    const [amount, setAmount]      = React.useState('');
    

    function handle(){
        console.log(email,amount);
        const url = `/account/deposit/${email}/${amount}`;
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

    Amount<br/>
    <input type="number"
    className="form-control"
    placeholder="Enter amount"
    value={amount}
    onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Deposit</button>
    </>);
}
    
