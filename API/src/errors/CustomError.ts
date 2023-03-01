export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
        super(message)
    }
}

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, 'Invalid email')
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, 'Invalid password')
    }
}

export class UserNotExist extends CustomError {
    constructor() {
        super(400, 'User not exist')
    }
}

export class Unauthorized extends CustomError {
    constructor() {
        super(401, 'Unauthorized')
    }
}