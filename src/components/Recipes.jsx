import { useState } from 'react'

const streetVendor = {
    items: 2,
    locations: 3
  }
  
  const streetVendor2 = {
      ...streetVendor,
      items: 10,
      locations: 5
  }
  
  console.log(streetVendor)
  console.log(streetVendor2)

  export default Recipes;