function getMax(nums:number[]) {
    let maxValue = -100000000;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i]
        }
        
    }
    return maxValue;
    
}


getMax([1,2,3,4,5,6])


//given  interface list out the users array which are above 18  

interface Useer {
    fname: string,
    lname: string,
    age: number
};

function filteruser(users: Useer[]) {
    let ans: Useer[] = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}


const filteredage = filteruser([{
    fname:"v",
    lname:"s",
    age:21
}])

console.log(filteredage);
