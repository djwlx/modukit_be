interface BaseNode {
  id: number;
  name: string;
  type: 'api' | 'saveLocal';
}
interface Task {
  id: number;
  name: string;
  description: string;
  status: string;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
}
type TaskType = 'loop' | 'once' | 'every';
