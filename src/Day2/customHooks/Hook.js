import { useEffect } from 'react'

function Hook(count) {
  useEffect(()=>{
    document.title=`count - ${count}`
  },[count])
}

export default Hook