import { useState } from "react";
import NavigationPublic from "../../components/navigation_public";

export default function LoginPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const login = async (event) => {
        event.preventDefault();
        window.location = '/users/index';
    }
    return(
        <>
            <NavigationPublic></NavigationPublic>
            <main className="container" style={{
                marginTop:75
            }}>
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Login Page</h4>
                        </div>

                        <div className="card-body">
                            <form method="post" onSubmit={login}>
                                <div className='form-group mb-3'>
                                    <label htmlFor=''>Email</label>
                                    <input id='email' 
                                    placeholder='Email' 
                                    className='form-control'
                                    onChange={(event)=>{
                                        setEmail(event.target.value)
                                    }}></input>
                                </div>

                                <div className='form-group mb-3'>
                                    <label htmlFor=''>Password</label>
                                    <input type='password' id='password' 
                                    placeholder='Password' 
                                    className='form-control'
                                    onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}></input>
                                </div>

                                <button id='submit' className='btn btn-primary'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}