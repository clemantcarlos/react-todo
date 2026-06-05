import type { Dispatch, SetStateAction, SubmitEvent } from "react";
import type { Task } from "../../App";
// import { randomUUID } from "crypto";

interface TaskDrawer {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setTasks: Dispatch<SetStateAction<Array<Task>>>;
}
function TaskDrawer({ isOpen, setIsOpen, setTasks }: TaskDrawer) {
  const addNewTask = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    
    const title = formData.get('title')?.toString() ?? '';
    const description = formData.get('description')?.toString() ?? '';
    const date = formData.get('date')?.toString() ?? '';

    const newTask:Task = {
      id: title+date,
      title,
      description,
      date,
      status: 'todo',
    };
    setTasks((arr) => [...(arr ?? []), newTask]);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="w-full text-white font-medium bg-purple-500 rounded-3xl px-4 py-4"
        type="button"
      >
        Create a new task
      </button>

      <div
        onClick={() => setIsOpen(false)}
        id="default-modal"
        tabIndex={-1}
        className={`
          overflow-y-auto overflow-x-hidden 
          fixed top-0 right-0 z-50 
          w-full h-full transition-all duration-100
          bg-black/20
          ${!isOpen ? "invisible" : ""}
        `}
      >
        <div className="relative w-full h-full flex items-end justify-center">
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
              w-full relative flex flex-col items-center justify-between border border-purple-500 bg-purple-500 rounded-t-3xl text-white p-4 transition-all duration-400
              ${!isOpen ? "top-100" : "top-0"}
            `}
          >
            <h3 className="text-lg font-bold text-center mb-4">Create new task</h3>
            <form
              className = "w-full h-full flex flex-col items-center justify-center gap-y-5"
              name = "task-form"
              onSubmit = {(e) => addNewTask(e)}
            >
              <input
                placeholder="Title"
                className="w-full p-2 bg-white text-stone-400 rounded-2xl focus:outline-none"
                name="title"
                type="text"
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 bg-white text-stone-400 rounded-2xl focus:outline-none"
                name="description"
              />
              <input
                placeholder="Date"
                className="w-full p-2 bg-white text-stone-400 rounded-2xl focus:outline-none"
                name="date"
                type="date"
              />
              <button
                type="submit"
                className="w-full bg-white text-purple-500 font-medium text-center rounded-2xl py-3"
              >
                Create New Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDrawer;
