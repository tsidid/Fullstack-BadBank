function Support(){
    const [show, setShow]      = React.useState(true);
    const [status, setStatus]  = React.useState(' ')

    return(
        <Card 
            bgcolor="danger"
            header="Contact Support"
            status={status}
            body={show ? 
            <SupportForm setShow={setShow}/>:
            <SupportMsg setShow={setShow}/>}
        
        />
    )
}

function SupportMsg(props){
    return(<>
    <h5>Support will contact you in five minutes</h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() =>props.setShow(true)}>Back</button>
    </>);
}

function SupportForm(props){
    const [email, setEmail]          = React.useState('');
    const [telephone, setTelephone]  = React.useState('');
    

    function handle(){
        console.log(email,telephone);
        const url = `/account/support/${email}/${telephone}`;
        (async () => {
            var res  = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
        props.setShow(false);
    }
    return (<>

    Email<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Telephone<br/>
    <input type="number"
    className="form-control"
    placeholder="Enter Phone Number"
    value={telephone}
    onChange={e => setTelephone(e.currentTarget.value)}/><br/>

    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Submit</button>
    </>);
}
    
