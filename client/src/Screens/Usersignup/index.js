import React from "react";
import { useState } from "react";

export default function UserSignup() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState(0);
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");

  const signUp = () => {
    // const re =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!re.test(email)) {
    //   return alert("Invalid email");
    // }

    console.log(password);
    fetch("http://localhost:2000/customer/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       name,
        email,
        password,
        number,
        location
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="Loginworkerdiv">
      <h1 className="signup">Sign up</h1>
      <p>Name</p>
      <input type="text" onChange={(e) => setname(e.target.value)} />
      <p>Email</p>
      <input type="email" onChange={(e) => setemail(e.target.value)} />
      <p>Mobile</p>
      <input type="tel" onChange={(e) => setnumber(e.target.value)} />
      <p>Password</p>
      <input type="password" onChange={(e) => setpassword(e.target.value)} />
      <p>Location</p>
      <input type="text" onChange={(e) => setlocation(e.target.value)} />
      <button className="buttn" onClick={signUp}>
        Submit
      </button>
    </div>
  );
}
