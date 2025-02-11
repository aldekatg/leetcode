function climbStairs(n: number): number {
    // Базовые случаи:
    if (n === 1) return 1;
    if (n === 2) return 2;

    // Инициализируем первые два значения:
    let a = 1; // Количество способов для n = 1
    let b = 2; // Количество способов для n = 2

    // Вычисляем количество способов для каждого шага от 3 до n
    for (let i = 3; i <= n; i++) {
        let temp = a + b;  // f(i) = f(i-1) + f(i-2)
        a = b;             // сдвигаем значения
        b = temp;
    }

    return b;
}
