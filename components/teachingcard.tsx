import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const TeachingCard = ({data}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {data.map((item) => (
        <Card key={item.title}>
          <CardHeader className='bg-sky-100'>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.method}</CardDescription>
          </CardHeader>
          <CardContent>
          <ul>
            {item.content}
            {/* {item.content.map((contentItem, index) => (
              <li key={index}>{contentItem}</li>
            ))} */}
          </ul>
          <ul>
            {item.use}
            {/* {item.use.map((useItem, index) => (
              <li key={index}>{useItem}</li>
            ))} */}
          </ul>
          </CardContent>
          <CardFooter>
          <p>Min Time: {item.min_time} minute(s)</p>
          <p>Max Time: {item.max_time} minute(s)</p>
          </CardFooter>
          
        </Card>
        
      ))}
    </div>
  )
}

export default TeachingCard