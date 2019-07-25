/**
 *
 * @param nameField
 * @param slugField
 */
function process(nameField, slugField){
    var space = '-',
        text = $('#'+ nameField).val().toLowerCase(),
        transliteration = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
            'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
            'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
            ' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
            '#': space, '$': space, '%': space, '^': space, '&': space, '*': space,
            '(': space, ')': space,'-': space, '\=': space, '+': space, '[': space,
            ']': space, '\\': space, '|': space, '/': space,'.': space, ',': space,
            '{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
            '?': space, '<': space, '>': space, '№':space, '«': space, '»': space, '—': space
        },
        result = '',
        current_character = '',
        i;

    for(i=0; i < text.length; i++) {
        if(transliteration[text[i]] !== undefined) {
            if(current_character !== transliteration[text[i]] || current_character !== space){
                result += transliteration[text[i]];
                current_character = transliteration[text[i]];
            }
        }
        else {
            result += text[i];
            current_character = text[i];
        }
    }

    result = TrimStr(result);
    $('#'+ slugField).val(result);
}

/**
 *
 * @param s
 * @returns {string}
 * @constructor
 */
function TrimStr(s) {
    s = s.replace(/^-/, '');
    return s.replace(/-$/, '');
}
