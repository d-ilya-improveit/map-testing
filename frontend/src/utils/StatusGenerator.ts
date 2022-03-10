import { Status, StoreStatuses, STATUS_ENUM } from '../types/statuses';

/**
 * @description Class used to create statuses (fulfilled, pending, rejected) that are used in redux store
 */
export class StatusGenerator {
	private static DEFAULT_STATUS: Status = { error: '', pending: false, success: false };
	private static STATUS_TEMPLATES = {
		[STATUS_ENUM.FULFILLED]: (): Status => ({...StatusGenerator.DEFAULT_STATUS, success: true}),
		[STATUS_ENUM.REJECTED]: (error?: string ): Status => ({...StatusGenerator.DEFAULT_STATUS, error: error ?? '' }),
		[STATUS_ENUM.PENDING]: (): Status => ({...StatusGenerator.DEFAULT_STATUS, pending: true}),
	};

  static generateStatuses = (statuses: string[]) => {
    return statuses.reduce((prev: StoreStatuses, curr: string) => {
      prev[curr] = StatusGenerator.DEFAULT_STATUS;
      return prev;
    }, {});
  };

	static setStatus = (status: STATUS_ENUM, error?: string) => {
		return StatusGenerator.STATUS_TEMPLATES[status](error);
	}
}
