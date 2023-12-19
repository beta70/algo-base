const jaroDistance = (str1,str2) => {
    const len1 = str1.length 
    const len2 = str2.length 
    const maxDistance = Math.floor(Math.max(len1,len2) / 2) - 1
    let hash1 = Array.from({ length: len1 }, () => 0)  
    let hash2 = Array.from({ length: len2 }, () => 0)  
    let matchingChars = 0

    if (!len1 || !len2) return 0
    if (str1 === str2) return 1

    
    for (let i = 0; i < len1; i++) {
        for (let j = Math.max(0, i - maxDistance); j < Math.min(i + 1 + maxDistance, len2); j++) {
            if (str1[i] === str2[j] && hash2[j] === 0) {
                hash1[i] = 1
                hash2[j] = 1
                matchingChars++
                break
            }
        }
    }
    
    if (matchingChars === 0) return 0

    let transpos = 0
    let pointer = 0

    for (var i = 0; i < len1; i++) {
        if (hash1[i]) {
            while (hash2[pointer] == 0) {
                pointer++;
            }

            if (str1[i] !== str2[pointer]) {
                transpos++;
            }
        
            pointer++
        }
    }

    transpos /= 2

    return ((matchingChars) / (len1) + (matchingChars) / (len2) + (matchingChars - transpos) / (matchingChars)) / 3.0
}

const jaroWinklerSimilarity = (q,target) => {
    let str1 = q.toLowerCase()
    let str2 = target.toLowerCase()

    if (jaroDistance(str1,str2) > 0.7) {
        let prefix = 0
        let len1 = str1.length
        let len2 = str2.length

        for (let i = 0; i < Math.min(len1,len2); i++) {
            if (str1[i] === str2[i]) prefix++
            else break
        }

        prefix = Math.min(4, prefix)

        return jaroDistance(str1,str2) + (0.1 * prefix * (1 - jaroDistance(str1,str2)))
    }

    return jaroDistance(str1,str2)
}