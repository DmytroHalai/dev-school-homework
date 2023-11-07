function sortString(str) {
    return str.split('').sort().join('');
}

function groupAnagrams(words) {
    const anagramGroups = {};

    for (const word of words) {
        const sortedWord = sortString(word);
        if (anagramGroups[sortedWord]) {
            anagramGroups[sortedWord].push(word);
        } else {
            anagramGroups[sortedWord] = [word];
        }
    }

    return Object.values(anagramGroups);
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "test", "cheese"]));