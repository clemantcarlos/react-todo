import Category from "./components/filters/Category";
import Search from "./components/filters/Search";
import TaskCard from "./components/tasks/TaskCard";

function App() {
  return (
    <>
      <main className="w-full max-w-lg mx-auto p-10 flex flex-col justify-center items-center gap-y-16">
        <section className="w-full max-w-md rounded-md text-blue">
          <span className="text-md text-stone-500">Good Day, Carlos!</span>
          <br />
          <strong className="text-4xl">
            You have <span className="text-purple-500">99 tasks</span> right now
            👍🏻
          </strong>
        </section>
        <section className="w-full flex flex-col gap-6">
          <Search />  
          <div className = "w-full flex items-center justify-between gap-4 *:w-25">
            <Category type = 'todo'/>
            <Category type = 'progress'/>
            <Category type = 'done'/>
          </div>
        </section>
        <section className = 'w-full'>
          <div className="w-full flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Recent Tasks</h2>
            <button type="button" className="text-stone-500 bg-stone-50 box-border leading-5 rounded-full text-sm px-6 py-2.5 focus:outline-none">See all</button>
          </div>
          <div className="w-full flex items-center gap-4 overflow-x-auto scroll-auto pb-4">
            <TaskCard status = 'todo'/> 
            <TaskCard status = 'todo'/> 
            <TaskCard status = 'todo'/> 
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
