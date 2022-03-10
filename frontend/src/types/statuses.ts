export enum STATUS_ENUM {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

export type Status = {
  success: boolean;
  pending: boolean;
  error: string | null;
};

export type StoreStatuses = {
  [key: string]: Status;
};
