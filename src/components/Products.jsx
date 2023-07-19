import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";


const productsUrl='https://raw.githubusercontent.com/kmagdi/json_images/main/products'

export const Products = () => {
          const {data,status,isLoading, isError}= useQuery(['products', productsUrl], getData)
          const navigate = useNavigate()
          if (isLoading) {
            <div>loading</div>
             return
                }
                if (isError) {
                  <div>Error by fetching data</div>
                  return
                    
                }
          status=='success' && console.log(data.products)
  return (
    <Box sx={{maxWidth:400, backgroundColor:'#ff8a80', margin:'5px auto'}}> 
         <List >
          {status=='success' && data.products.map(obj=>
            <ListItem key={obj.id} disablePadding>
            <ListItemButton component="a" 
            onClick={()=>navigate('/products/'+obj.id)}
            >
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
                    )}
        
        </List>
    </Box>
  )
}



