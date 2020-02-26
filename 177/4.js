/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    const cnt = digits.reduce((t,i)=>{t[i]=t[i]+1;return t},new Array(10).fill(0));
    console.log(`${JSON.stringify(digits)} count ${JSON.stringify(cnt)}`);

        let remain1Cnt = cnt[1] + cnt[4] + cnt[7]; // Number of elements with remainder = 1
        let remain2Cnt = cnt[2] + cnt[5] + cnt[8]; // Number of elements with remainder = 2
        const remainSum = (remain1Cnt + 2 * remain2Cnt) % 3;
        if (remainSum == 1) { // Delete 1 smallest digit with remainder = 1 or Delete 2 smallest digits with remainder = 2
            if (remain1Cnt >= 1) remain1Cnt -= 1;
            else remain2Cnt -= 2;
        } else if (remainSum == 2) { // Delete 1 smallest digit with remainder = 2 or Delete 2 smallest digits with remainder = 1
            if (remain2Cnt >= 1) remain2Cnt -= 1;
            else remain1Cnt -= 2;
        }

        const sb = new Array();
        for (let d = 9; d >= 0; d--) {
            if (d % 3 == 0) {
                while (cnt[d]-- > 0) {
                    sb.push(d);
                }
            }
            else if (d % 3 == 1) {
                while (cnt[d]-- > 0 && remain1Cnt-- > 0) {
                    sb.push(d);
                }
            }
            else {
                while (cnt[d]-- > 0 && remain2Cnt-- > 0) {
                    sb.push(d);
                }
            }
        }
        let result = sb.join('');
        if (sb.length > 0 && sb[0] == '0') {
            result = "0"
        } ; // Remove leading 0 case [0,...,0]
        console.log(`${JSON.stringify(digits)} return ${result}`);

        return result;
};


largestMultipleOfThree([8,1,9]);
largestMultipleOfThree([8,6,7,1,0]);
largestMultipleOfThree([1]);
largestMultipleOfThree([0,0,0,0,0,0]);

