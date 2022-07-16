import './App.css';
import Nav from './shared-components/Nav';
import Footer from './shared-components/Footer';
import MainBoard from './components/Main-Board';
import TaskListProvider from './shared-components/Context/TaskList/taskList.provider';
import CounterProvider from './shared-components/Context/Counter/counter.provider';
import FilteredTasksProvider from './shared-components/Context/FilteredTasks/filteredTasks.provider';
import UpdatedMainDateProvider from './shared-components/Context/UpdatedMainDate/updatedMainDate.provider';

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <UpdatedMainDateProvider>
      <CounterProvider>
      <FilteredTasksProvider>
      <TaskListProvider>
      <MainBoard></MainBoard>
      </TaskListProvider>
      </FilteredTasksProvider>
      </CounterProvider>
      </UpdatedMainDateProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
