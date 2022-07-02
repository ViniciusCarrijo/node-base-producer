import CandidateQueue from './candidate.queue';
import VoteQueue from './vote.queue';
import EmailQueue from './email.queue';
import LogQueue from './log.queue';

const queues = {
  log: LogQueue.getInstance().queue,
  email: EmailQueue.getInstance().queue,
  candidate: CandidateQueue.getInstance().queue,
  vote: VoteQueue.getInstance().queue,
};

export default queues;
