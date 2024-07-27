import { useState } from 'react'
import './App.css'

let name:string;
type Person={
  name:string;
  age?:number;
}
interface Building{
  country:string
}
interface House extends Building{
  location:string,
  num:number
}

let house:House={
  country:'India',
  location:'shimoga',
  num:10
}

let person:Person={
  name:'Abhi',
}
let arr:Person[]=[];

function App() {
  arr.push(person)

  return (
    <>
  {house.country}      
    </>
  )
}

export default App
