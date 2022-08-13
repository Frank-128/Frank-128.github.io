import React from 'react'
import grayman from './pics/grayman.jpg'
import Sing2 from './pics/Sing2.jpg'
import towerHeist from './pics/towerHeist.jpg'
import Uncharted from './pics/Uncharted.jpg'
import WeddingSeason from './pics/WeddingSeason.jpg'
function ImportAll() {
  
  const pictures = [
    {id:1,
      src:grayman,
    title:"Upcoming"},
      {id:2,
        src:Sing2,
      title:"Trending"},
         { id:3,
          src: towerHeist,
        title:"Trending"},
          {id:4,
          src:Uncharted,
        title:"latest"},
          {id:5,
            src:WeddingSeason,
          title:"Popular"}]
  return (<div>
    {pictures.map(({id,src,title})=> <>
      <div className='view'>
  <div className='bg-image hover-zoom hover-zoom'>
  
    <h2 className='text-light fw-bolder  p-4'>{title}
    </h2>     
  <img className='img-fluid w-50  img-thumbnail' src={src} alt={id} />
  <div className='mask flex-center rgba-black-light'>
      <p className='text-light fw-bold'>{title}</p>
    </div>
    </div>
        </div>
    </>)}
    </div>
  )
}

export default ImportAll
