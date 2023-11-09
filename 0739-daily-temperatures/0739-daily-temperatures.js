/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    const result = [];
    
    temperatures.forEach((temperature, index) => {
        let futureDay = null;
        
        for (let i = index + 1; i < temperatures.length; i++) {
            if (temperatures[i] > temperature) {
                futureDay = i - index;
                
                break;
            }
        }

        if (futureDay === null) {
            result.push(0);
        } else {
            result.push(futureDay);
        }
    })
    
    return result;
};