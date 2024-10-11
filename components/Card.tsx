import React from 'react'
import Image from 'next/image';

interface propsType {
  id:number;
    title:string;
    desc:string;
    img: string;
    link:string;

}

const Card:React.FC<propsType> = ({title, desc, img, link}) => {
  return (
    <div className='border border-accent w-[300px] sm:[300px]'>
     <div> 
        <Image className='w-[300px] sm:[300px] h-auto'
        src={img} 
        width={300}
        height={300}
        alt={title}
        />
        </div> 
<div className='p-4 space-y-4'>
<div className='text-4xl font-extralight'>{title}</div>
<div>{desc}</div>
<div>{link}</div>

</div>
    </div>
  )
}

export default Card
