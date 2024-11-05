// 任务调度器
class TaskManager {
  // 所有任务
  tasks: Task[];

  constructor(taskParams?: Task[]) {
    this.tasks = taskParams ?? [];
  }

  // 添加任务
  addTask(task: Task) {
    this.tasks.push(task);
  }
}
export default new TaskManager();
