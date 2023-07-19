import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getData } from '../utils';
import { ProductCard } from './ProductCard';
import {motion} from 'framer-motion'



const productsUrl='https://raw.githubusercontent.com/kmagdi/json_images/main/products'

export const Product = () => {
          const params = useParams()
          console.log(params);
          const {data,status,isLoading, isError}= useQuery(['products', productsUrl, params.id], getData)
          status == 'success' && console.log(data[0].imgUrl)

  return (      
    <motion.div 
     initial={{x:'100vw'}} 
     animate={{x:0}}
     transition={{delay:0.2,type:'spring',stiffness:40}}
     >
          {status == 'success' && <ProductCard {...data[0]} />}
    </motion.div>
  )
}
