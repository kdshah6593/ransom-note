function buildHistogram(letters) {
    const lettersObj = {}

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i]
        if (lettersObj[letter]) {lettersObj[letter] += 1}
        else {lettersObj[letter] = 1}
    }
    return lettersObj
}

function canBuildNote(letters, note) {
    const obj = buildHistogram(letters)
    const editedNote = note.replaceAll(" ", "") // remove any spaces

    for (let i = 0; i < editedNote.length; i++) {
        let letter = editedNote[i]
        if (obj[letter] && obj[letter] > 0) {
            obj[letter] -= 1
            continue
        } else {
            return false
        }
    }
    return true
}