function lengthOfLongestSubstring(s: string): number {
  let charSet = new Set(); // Храним уникальные символы
  let left = 0; // Левый указатель
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Если символ уже есть в Set, сдвигаем левую границу
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    // Добавляем новый символ в Set
    charSet.add(s[right]);

    // Обновляем максимальную длину
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
