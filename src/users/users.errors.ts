export class UserNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserNotFoundError';
  }
}

export class DuplicateUserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DuplicateUserError';
  }
}