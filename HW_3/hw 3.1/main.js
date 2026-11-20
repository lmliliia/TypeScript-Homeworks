"use strict";
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>('/url')
// SomeType - ваш тип відповіді
// url - ваш ендпоінт, з якого чекаємо відповідь
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function foobar(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return yield response.json();
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield foobar('https://jsonplaceholder.typicode.com/users/1');
            console.log(user.name);
        }
        catch (error) {
            console.error("Помилка:", error);
        }
    });
}
test();
