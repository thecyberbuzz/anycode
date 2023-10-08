import { prisma } from "@//db";
import Link from "next/link";
import { redirect } from "next/navigation";
async function CreateTodo(data:FormData){
    "use server"
const title = data.get("title")?.valueOf();
if(typeof(title)!=="string" || title.length===0){
    throw new Error ("invalid input")
}
await prisma.todo.create({data:{title,complete:false}})
redirect("/")
}

export default function Page(){
    return(<>
    <header className="flex justify-between items-center max-w-5xl mx-auto mb-3 mt-2">
    <h1 className="text-4xl ">New</h1>
  </header>
  <form action={CreateTodo} className="flex gap-2 flex-col">
    <input type="text" name='title' className="border border-slate-300 bg-transparent rounded px-2
    py-1 outline-none focus-within:border-slate-100"/>
    <div className="flex gap-1 justify-end">
    <Link  href=".."  className="border border-slate-300 rounded px-2 py-1 text-2xl
     hover:bg-slate-600 focus-within:bg-slate-600 outline-none ">Cancel</Link>
     <button type="submit" className="border border-slate-300 rounded px-2 py-1 text-2xl
     hover:bg-slate-600 focus-within:bg-slate-600 outline-none ">Create</button>
    </div>
  </form>
  
  </>)
}