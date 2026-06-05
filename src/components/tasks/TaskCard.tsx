import type { Task } from "../../App";
import type { Status } from "../../types/status";

const colors: Record<Status, string> = {
  done: '',
  todo: '',
  progress: ''
}
export default function TaskCard({task, status}: {task?: Task, status: Status}) {
  return (
    <article className={'min-w-62.5 min-h-50  bg-purple-500 text-white p-4 rounded-2xl' + ' ' + colors[status]}>
      <h2 className="text-xl font-bold">
        {task ? task.title : 'Reunion de equipo 🙌'}
      </h2>
      <p className="mt-4 text-purple-50">
       {task ? task.description : 'Group discussion for the new product.'}
      </p>
      <div className="mt-2 mb-3 font-medium">
       {task ? task.date : '10:00 AM'}
      </div>
      {/* <div className="w-full flex justify-between font-bold mb-2 ">
        <span>Progress</span>
        <span>50%</span>
      </div> */}
    </article>
  )
}
