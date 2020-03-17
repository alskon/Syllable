//syllableRus chapter
export const syllableRusButton = [
    {id:1, name:'Простые слоги', trigger:'easy'}, 
    {id:2, name: 'Простые слоги + Сложные слоги', trigger:'hard'}, 
    {id:3, name:'Простые слоги + Сложные слоги + Экстра сложные слоги',trigger:'extra'}]

export const easyVowels = ['а', 'е', 'и', 'у','о']
export const hardVowels = [...easyVowels, 'я', 'ю', 'ё']
export const extraVowels = [...hardVowels, 'ы','э']
    
export const easyConsonants = ['б','в','г','д','н','м','л','к']
export const hardConsonants = [...easyConsonants,'т','з','п','р','с','ж']
export const extraConsonants = [...hardConsonants,'х','ф','ц','ч','ш','щ','й']
//wordsRus chapter
export const wordsRusButton = [
    {id:1, name:'Слова (3 буквы)', trigger:'threeLetterWords'},
    {id:2, name:'Слова (4 буквы)', trigger:'fourLetterWords'},
    {id:3, name:'Слова (6 букв)', trigger:'sixLetterWords'},
    {id:4, name:'Все слова', trigger:'allWordsRus'}
]
//syllableEng chapter
export const syllableEngButton = [
    {id:1, name:'Easy syllables', trigger:'easyEng'}, 
    {id:2, name: 'Easy syllables + Hard syllables', trigger:'hardEng'}, 
    {id:3, name:'Easy syllables + Hard syllables + Extra hard syllables',trigger:'extraEng'}]

export const easyVowelsEng = ['a', 'e', 'i']
export const hardVowelsEng = [...easyVowelsEng, 'o', 'u', 'y']
    
export const easyConsonantsEng = ['b','c','d','f','g','k', 'l', 'm', 'n']
export const hardConsonantsEng = [...easyConsonantsEng,'h','j','p','s','t']
export const extraConsonantsEng = [...hardConsonantsEng,'r','v','w','q','x','z']
//wordsEng chapter
export const wordsEngButton = [
    {id:1, name:'Words (3 letters)', trigger:'threeLetterWordsEng'},
    {id:2, name:'Words (4 letters)', trigger:'fourLetterWordsEng'},
    {id:3, name:'Words (6 letters)', trigger:'sixLetterWordsEng'},
    {id:4, name:'All words', trigger:'allWordsEng'}
]
//Numbers chapter
export const numbersButton = [
    {id:1, name:'Простые уравнения', trigger:'easyEquation'}, 
    {id:2, name: 'Сложные уравнения', trigger:'hardEquation'}, 
    {id:3, name:'Очень сложные уравнения',trigger:'extraEquation'}]
//Min Max chapter
export const minMaxButton = [
    {id:1, name:'Минимум и максимум (легко)', trigger:'easyMinMax'}, 
    {id:2, name:'Минимум и максимум (сложно)', trigger:'hardMinMax'}, 
    {id:3, name:'Минимум и максимум (очень сложно)',trigger:'extraMinMax'}]