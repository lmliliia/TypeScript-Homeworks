// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>('/url')
// SomeType - ваш тип відповіді
// url - ваш ендпоінт, з якого чекаємо відповідь


async function foobar<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json() as T;
}

interface User {
    id: number;
    name: string;
}

async function test() {
    try {
        const user = await foobar<User>('https://jsonplaceholder.typicode.com/users/1');
        console.log(user.name);
    } catch (error) {
        console.error("Помилка:", error);
    }
}

test();