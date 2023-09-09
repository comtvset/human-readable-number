module.exports = function toReadable (number) {
    const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let str = String(number).split('');
    let digits1 = [];
    let digits2 = [];
    let digits3 = [];
    for (let i = 0; i < str.length; i++) {
        if(str == 0) {
            return `${a[0]}`
        }
        if(str.length == 1) {
            for (let i = 0; i < str; i++) {
                digits1.push(a[i+1])
            }
            return `${digits1.slice(-1)}`
        }
        if(str.length == 2) {
            let ones = str[0];
            let tens = str[1];
            if(ones == 1 && tens == 0) {
                for (let i = 0; i < 1; i++) {
                    digits1.push(b[0])
                }
                return `${digits1.slice(-1)}`
            }
            if(ones == 1) {
                for (let i = 0; i < tens; i++) {
                    digits1.push(b[i+1])
                }
                return `${digits1.slice(-1)}`
            }
            if(ones > 1 && tens > 0) {
                for (let i = 0; i < ones; i++) {
                    digits2.push(c[i-1])
                }
                for (let i = 0; i < tens; i++) {
                    digits1.push(a[i+1])
                }
                return `${digits2.slice(-1)} ${digits1.slice(-1)}`
            } else {
                for (let i = 0; i < ones; i++) {
                    digits2.push(c[i-1])
                }
                for (let i = 0; i < tens; i++) {
                    digits1.push(a[i+1])
                }
                return `${digits2.slice(-1)}`
            }
        }
        if(str.length == 3) {
            let hundreds = str[0];
            for (let i = 0; i < hundreds; i++) {
                digits3.push(a[i+1])
            }
            let ones = str[1];
            let tens = str[2];
            if(ones == 1 && tens == 0) {
                for (let i = 0; i < 1; i++) {
                    digits1.push(b[0])
                }
                return `${digits3.slice(-1)} hundred ${digits1.slice(-1)}`
            }
            if(ones == 1) {
                for (let i = 0; i < tens; i++) {
                    digits1.push(b[i+1])
                }
                return `${digits3.slice(-1)} hundred ${digits1.slice(-1)}`
            }
            if(ones > 1 && tens > 0) {
                for (let i = 0; i < ones; i++) {
                    digits2.push(c[i-1])
                }
                for (let i = 0; i < tens; i++) {
                    digits1.push(a[i+1])
                }
                return `${digits3.slice(-1)} hundred ${digits2.slice(-1)} ${digits1.slice(-1)}`
            }
            if(ones == 0 && tens >= 1) {
                for (let i = 0; i < ones; i++) {
                    digits2.push(c[i-1])
                }
                for (let i = 0; i < tens; i++) {
                    digits1.push(a[i+1])
                }
                return `${digits3.slice(-1)} hundred ${digits2.slice(-1)}${digits1.slice(-1)}`
            }
            if(ones >= 1 && tens >= 0) {
                for (let i = 0; i < ones; i++) {
                    digits2.push(c[i-1])
                }
                for (let i = 0; i < tens; i++) {
                    digits1.push(a[i+1])
                }
                return `${digits3.slice(-1)} hundred ${digits2.slice(-1)}${digits1.slice(-1)}`
            }
            else {
                return `${digits3.slice(-1)} hundred`
            }
        }
  }
}
