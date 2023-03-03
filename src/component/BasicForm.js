import React, { useState } from 'react'

const BasicForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // For store the user data
    const [allEntry, setAllEntry] = useState([]);

    // Assigned the value
    const submitForm = (e) => {
        // For remove the page reload when user click on submit button
        e.preventDefault();

        if (email && password) {
            // id is use for unique key warning remove
            const newEntry = { id: new Date().getTime().toString(), email: email, password: password };

            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);

            // After click on submit btn it input tag will be empty
            setEmail("");
            setPassword("");
        }
        else {
            alert("Please filled the data");
        }
    }
    return (
        <>
            <div className="container" onSubmit={submitForm}>
                <form>
                    <div className="m-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="m-3">
                        <label htmlFor="exampleInputPassword1" name='password' className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" autoComplete='off'
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="m-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

            <div className="container">
                {
                    // To show the value
                    allEntry.map((curElm) => {
                        const { id, email, password } = curElm;
                        return <div key={id}>
                            <p>Email: {email}</p>
                            <p>Password: {password}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default BasicForm