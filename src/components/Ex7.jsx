import React,{useLayoutEffect,useState} from 'react'

const url = 'https://jsonplaceholder.typicode.com'

function Ex7(props) {
    const [users,setUsers]=useState([])
    const getUsers= async()=>{
        await fetch(`${url}/users`)
        .then(res =>res.json())
        .then(out =>{
            console.log('out=',out)
            setUsers(out)
        }).catch(err=>console.log(err.message))
    }
    useLayoutEffect(()=>{
        getUsers()
    },[])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <div className="display-3 text-success">useLayoutEffect</div>
        </div>
      </div>
      <div className="row">
        {
            users && users.map((item,index)=>{
                return(
                    <div className="col-md-4 mt-2 mb-2" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="text-success text-center">{item.name}</h5>
                            </div>
                            <div className="card-body">
                                <h5 className="text-secondary text-center">{item.username}</h5>
                                <h3 className="text-warning text-center">{item.company.catchPhrase}</h3>
                            </div>
                            <div className="card-footer">
                                <h5 className="text-primary text-center">{item.website}</h5>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Ex7
