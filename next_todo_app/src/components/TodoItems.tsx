"use client"
type todotype = {
    id:string,
    title:string,
    complete:boolean,
    toggleTodo:(id:string,complete:boolean)=>void,
}

export function TodoItems({id,title,complete,toggleTodo}:todotype){
    return (
    <li className="flex gap-1 items-center text-2xl">
        <input type="checkbox" id={id} className="cursor-pointer peer" defaultChecked={complete} onChange={e=>toggleTodo(id,e.target.checked)}/>
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-400">{title}</label>
    </li>)
}