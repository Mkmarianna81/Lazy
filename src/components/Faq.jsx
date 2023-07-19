import React,{useState} from 'react'
import { questions } from '../data_faq'
import { Question } from './Question'
import { useNavigate } from 'react-router-dom'


export const Faq = () => {
    const [faq,setFaq]=useState(questions)
    const navigate = useNavigate()
    
  return (
    <div className='faq'>
       {faq.map(obj=>
        <Question key={obj.id} {...obj} />
        )}
        <button onClick={()=>navigate('/')}>Home Page</button>
    </div>
  )
}

