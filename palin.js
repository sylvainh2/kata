function longestPalindromeSubsequence(s) {
    const n = s.length;

    // Tous les caractères seuls sont des palindromes de longueur 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Remplissage de la table DP
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                dp[i][j] = 2 + (dp[i + 1][j - 1] || 0);
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
            console.log(dp[i][j])
        }
    }

    // Reconstruction du palindrome
    let res = [];
    let i = 0, j = n - 1;
    while (i <= j) {
        if (s[i] === s[j]) {
            res.push(s[i]);
            i++;
            j--;
        } else if (dp[i + 1][j] > dp[i][j - 1]) {
            i++;
        } else {
            j--;
        }
    }

    // Construire le palindrome complet (ajouter la seconde moitié)
    const firstHalf = res.join('');
    const secondHalf = res.slice(0, dp[0][n - 1] % 2 === 0 ? res.length : res.length - 1).reverse().join('');
    console.log(firstHalf,secondHalf,res);
    return firstHalf + secondHalf;
}

// Exemple d'utilisation :
let mess = "";
const mot = "raaefacarb";
let m = mot.length;
const dp = Array.from({ length: m }, () => Array(m).fill(0));

const palindrome = longestPalindromeSubsequence(mot);
console.log(`Le plus grand palindrome possible est : ${palindrome}`);
for(i=0;i<m;i++){
    for(j=0;j<m;j++){
        mess += dp[i][j];
    }
    console.log(mess);
    mess ="";
}
