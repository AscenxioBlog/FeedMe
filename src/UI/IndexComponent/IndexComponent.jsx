import React from 'react'
import IndexComponent1 from './IndexComponent1'
import IndexComponent2 from './IndexComponent2'
import IndexComponent3 from './IndexComponent3'
import IndexComponent4 from './IndexComponent4'
import IndexComponent5 from './IndexComponent5'
import BusinessWork from './BusinessWork'

function IndexComponent() {
  return (
    <div>
        <IndexComponent1/>
        <IndexComponent4/>
        <IndexComponent2/>
        <BusinessWork/>
        {/* <IndexComponent5/> */}
        <IndexComponent3/>
        
    </div>
  )
}

export default IndexComponent