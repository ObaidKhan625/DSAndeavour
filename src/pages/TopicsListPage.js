import React from 'react'
import problems from '../assets/data'
import Problem from '../components/Problem'

const TopicsListPage = () => {
  return (
    <div>
        <h1>Trees</h1>
        {problems.map((problem, index) => (
            <div>
              {/* problem= is the key that will be used and {problem} is value */}
              <Problem key={index} problem={problem}/>
            </div>
        ))}
    </div>
  )
}

export default TopicsListPage