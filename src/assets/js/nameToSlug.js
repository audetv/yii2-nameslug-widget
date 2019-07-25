function transliteration(nameField, slugField){
// Символ, на который будут заменяться все спецсимволы
    var space = '-';
// Берем значение из нужного поля и переводим в нижний регистр
    console.log('#'+ nameField);
    var text = $('#'+ nameField).val().toLowerCase();

// Массив для транслитерации
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
        ' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
        '#': space, '$': space, '%': space, '^': space, '&': space, '*': space,
        '(': space, ')': space,'-': space, '\=': space, '+': space, '[': space,
        ']': space, '\\': space, '|': space, '/': space,'.': space, ',': space,
        '{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
        '?': space, '<': space, '>': space, '№':space
    };

    var result = '',
        current_sim = '',
        i;

    for(i=0; i < text.length; i++) {
        // Если символ найден в массиве то меняем его
        if(transl[text[i]] !== undefined) {
            if(current_sim !== transl[text[i]] || current_sim !== space){
                result += transl[text[i]];
                current_sim = transl[text[i]];
            }
        }
        // Если нет, то оставляем так как есть
        else {
            result += text[i];
            current_sim = text[i];
        }
    }

    result = TrimStr(result);

// Выводим результат
    $('#'+ slugField).val(result);
}
function TrimStr(s) {
    s = s.replace(/^-/, '');
    return s.replace(/-$/, '');
}
// Выполняем транслитерацию при вводе текста в поле
