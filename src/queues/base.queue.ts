import * as Bull from 'bull';
import configs from '../configs';
import { Queues } from '../enums';

export default class BaseQueue {
  queue: Bull.Queue;

  constructor(queue: Queues) {
    this.queue = new Bull(queue, {
      redis: configs.redis,
      prefix: 'bull',
      settings: {
        retryProcessDelay: 500,
      },
    });

    this.queue.on('failure', this.failed);

    this.queue.on('completed', this.completed);

    this.queue.on('error', (error) =>
      console.error(`Falha nas tasks, verifique suas configurações: ${error}`),
    );
  }

  protected failed(job, error) {
    console.error(
      `Queue ${job.queue.name} has been failed, ${job.id} - ${job.failedReason}`,
    );
    console.error(error);
  }

  protected completed(job) {
    console.log(`Queue ${job.queue.name} has been completed, ${job.id}`);
  }

  add(body: any, options?: Bull.JobOptions) {
    return this.queue.add(
      body,
      options || {
        attempts: 5,
        delay: 2000,
        removeOnFail: false,
        backoff: 5000,
      },
    );
  }
}
