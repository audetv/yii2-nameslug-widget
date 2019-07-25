function transliteration(nameField, slugField){
    var space = '-',
        text = $('#'+ nameField).val().toLowerCase(),
        transl = {
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
        },
        result = '',
        current_sim = '',
        i;

    for(i=0; i < text.length; i++) {
        if(transl[text[i]] !== undefined) {
            if(current_sim !== transl[text[i]] || current_sim !== space){
                result += transl[text[i]];
                current_sim = transl[text[i]];
            }
        }
        else {
            result += text[i];
            current_sim = text[i];
        }
    }

    result = TrimStr(result);
    $('#'+ slugField).val(result);
}
function TrimStr(s) {
    s = s.replace(/^-/, '');
    return s.replace(/-$/, '');
}
