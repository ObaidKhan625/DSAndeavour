import React from 'react'
import problems from '../assets/data'

const TopicsListPage = () => {
  return (
    <div>
        <div>Trees</div>
        {problems.map(problem => (
            <>
                <p>{problem.name}</p>
                <p>{problem.type}</p>
            </>
        ))}
    </div>
  )
}

export default TopicsListPage