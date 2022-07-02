import EmailQueue from './email.queue';
import LogQueue from './log.queue';

const queues = {
  log: LogQueue.getInstance().queue,
  email: EmailQueue.getInstance().queue,
};

export default queues;
