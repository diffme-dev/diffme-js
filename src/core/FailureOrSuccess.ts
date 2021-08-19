export type FailureOrSuccess<E, V> = Failure<E, never> | Success<never, V>;

export class Failure<E, V> {
    readonly _value: E;

    constructor(error: E) {
        this._value = error;
    }

    isFailure(): this is Failure<E, V> {
        return true;
    }

    isSuccess(): this is Success<E, V> {
        return false;
    }

    get value(): V {
        throw new Error(
            "Can't get the value of an error result. Use '.error' instead."
        );
    }

    get error(): E {
        return this._value;
    }
}

export class Success<E, V> {
    readonly _value: V;

    constructor(value: V) {
        this._value = value;
    }

    isFailure(): this is Failure<E, V> {
        return false;
    }

    isSuccess(): this is Success<E, V> {
        return true;
    }

    get value(): V {
        return this._value;
    }

    get error(): E {
        throw new Error(
            "Can't get the errorValue of a success result. Use '.value' instead."
        );
    }
}

export const failure = <E, V>(error: E): FailureOrSuccess<E, V> =>
    new Failure<E, never>(error);

export const success = <E, V>(value: V): FailureOrSuccess<E, V> =>
    new Success<never, V>(value);
