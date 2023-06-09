import React,{useState,useCallback} from 'react'
import Age from './sub/Age'
import AgeInfo from './sub/AgeInfo'

//useCallBack => will return memorized value of callback
//useMemo => will return memorized function of callback

function Ex4() {
  const [age,setAge]=useState(10)

  const incrementAge=  ()=>{
    setAge(age+1)
  }
  const userAge =`David age is ${age} years`

  //useCallback will return a memorized version of the callback that only changes if one of the input has changed

  const updateAge=useCallback(()=>{
    return userAge
  },[age])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">useCallBack</h3>
        </div>
      </div>
      <Age age={age} ageHandler={incrementAge}/>
      <AgeInfo ageInfo={updateAge} />
    </div>
  )
}

export default Ex4