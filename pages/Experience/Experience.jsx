import React from 'react'

const Experience = ({data}) => {
    
  return (
    <div style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
      
      <div style={{display:"flex",marginTop:"30px"}}><button style={{padding:"10px",borderRadius:"30px",marginRight:"10px"}}>1</button>
      <div>
      <h2>SDE-3 at Masai school</h2>
      <p>3 october 2021 - Present</p>
      </div>
      </div>

      <div style={{display:"flex",marginTop:"30px"}}><button style={{padding:"10px",borderRadius:"30px",marginRight:"10px"}}>1</button>
      <div>
      <h2>SDE-3 at Masai school</h2>
      <p>3 october 2021 - Present</p>
      </div>
      </div>

      <div style={{display:"flex",marginTop:"30px"}}><button style={{padding:"10px",borderRadius:"30px",marginRight:"10px"}}>1</button>
      <div>
      <h2>SDE-3 at Masai school</h2>
      <p>3 october 2021 - Present</p>
      </div>
      </div>


    </div>
  )
}

export async function getServerSideProps(){
    let res = await fetch(`https://api.github.com/users/vermabraj`)
    let data = await res.json()
    return {
        props:{
            data:data,
        }
    }
  }
  
export default Experience
