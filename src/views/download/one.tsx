import React from 'react'
import { myContent } from '@/views/discover'

const one = () => {
  return (
    <div>
      <myContent.Consumer>
        {
          (value) => (
            <div>
              value is { value }
            </div>
          )
        }
    </myContent.Consumer>
    </div>
  )
}

export default one
