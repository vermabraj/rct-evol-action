import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter()

const experienceClick=()=>{
  router.push("/Experience/Experience")
}

const projectClick=()=>{
  router.push("/Project/Project")
}
const homeClick=()=>{
  router.push("/")
}

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
    <h3 onClick={homeClick}>Brajmohan verma</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "400px",
        }}
      >
       <h1 onClick={experienceClick}>Experience</h1>
       <h1 onClick={projectClick}>Projects</h1>
        
      </div>
      <div style={{}}>
        
        <img
          src={"https://avatars.githubusercontent.com/u/107499188?v=4"}
          width="50px"
        />
      </div>
    </div>
  );
};



export default Navbar;
