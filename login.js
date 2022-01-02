function Login(){ 
    const [show, setShow]      = React.useState(true);
    const [status, setStatus]  = React.useState(' ')

    const firebaseConfig = {
        apiKey: "AIzaSyCM3oeeAObLBHuBzPKUC2_tbW3auV9u1DE",
        authDomain: "mit-badbank.firebaseapp.com",
        projectId: "mit-badbank",
        storageBucket: "mit-badbank.appspot.com",
        messagingSenderId: "323706728824",
        appId: "1:323706728824:web:be3312e93c232029ff588d"
    }

    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    return(
        <Card 
            bgcolor="secondary"
            header="Login"
            status={status}
            body={show ? 
            <LoginForm setShow={setShow}/>:
            <LoginMsg setShow={setShow}/>}
        
        />
    )
}

function LoginMsg(props){
    return(<>
    <h5>Successfully Logged In</h5>
    <button type="submit"
    className="btn btn-light"
    onClick={() =>props.setShow(true)}>Log Out</button>
    </>);
}

function LoginForm(props){
    const [email, setEmail]        = React.useState('');
    const [password, setPassword]  = React.useState('');

    function handle(){
        console.log(email,password);
        const url = `/account/login/${email}/${password}`;
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

    Password<br/>
    <input type="password"
    className="form-control"
    placeholder="Enter Password"
    value={password}
    onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit"
    className="btn btn-light"
    onClick={handle}>login</button>
    </>);
}
    
