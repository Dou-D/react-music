const PREFIX = "react_";

// 用户头
const USER_PREFIX = `${PREFIX}user_`;

const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;

const set = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

const get = (key: string) => localStorage.getItem(key);

const remove = (key: string) => localStorage.removeItem(key);
export default {
    set,
    get,
    remove,
    USER_TOKEN,
    USER_INFO,
};
