import React from 'react'

const Project = ({data_again}) => {
    
  return (
    <div style={{displa:"flex",justifyContent:"center"}}>
      
      <div>
      <div>
      <h2>{data_again.items[0].full_name}</h2>
      <p>{data_again.items[0].name}</p>
             </div>
             
             <div>
      <h2>{data_again.items[1].full_name}</h2>
      <p>{data_again.items[1].name}</p>
             </div>
             
             <div>
      <h2>{data_again.items[2].full_name}</h2>
      <p>{data_again.items[2].name}</p>
             </div>
             
             <div>
      <h2>{data_again.items[3].full_name}</h2>
      <p>{data_again.items[3].name}</p>
             </div>
      
      </div>
    </div>
  )
}

export async function getServerSideProps(){
    let res = await fetch(`https://api.github.com/users/vermabraj`)
    let  resAgain = await fetch(`https://api.github.com/search/repositories?q=user:vermabraj+fork:true&sort=updated&per_page=10&type=Repositories`);
  
    let data = await res.json()
    let data_again = await resAgain.json()
    return {
        props:{
            data,
            data_again
        }
    }
  }
  
export default Project
