
import Link from "next/link"
import { prisma } from "../db"
import {TodoItems} from "../components/TodoItems"

async function toggleTodo(id:string,complete:boolean){
"use server"
  await prisma.todo.update({where:{id},data:{complete}})
}


export default async function Home() {
  const todos = await prisma.todo.findMany();
  return (
    <>
    <header className="flex justify-between items-center max-w-5xl mx-auto mb-3 mt-2">
      <h1 className="text-4xl ">Todos</h1>
      <Link  href="/new"  className="border border-slate-300 rounded px-2 py-1 text-2xl
     hover:bg-slate-600 focus-within:bg-slate-600 outline-none ">New</Link>
    </header>
    <ul>
      {todos.map(todo=>{
       return (<TodoItems key={todo.id} {...todo} toggleTodo={toggleTodo}/>)
      })}
    </ul>
    </>
  )
}
