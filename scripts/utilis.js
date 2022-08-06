export function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getClassName(object) {
    return object.name.toLowerCase();
}

export const timeout = async time => await new Promise(resolve => setTimeout(resolve, time));
