// Practice 1

function calculate(min, max){
    let sum = 0
    for (let i = min; i < max + 1; i++){
        sum += i
    }
    return sum
}

console.log("#1")
console.log(calculate(1,3))
console.log(calculate(4,8))

// -------------------------------------------

// Practice 2

function avg(data){
    let sum = 0
    for (let i = 0; i < data.employees.length; i++){
        sum += data.employees[i].salary
    }
    return sum / data.count
}

console.log("\n#2")
console.log(avg({
    "count":3,
    "employees":[
    {
    "name":"John",
    "salary":30000
    },
    {
    "name":"Bob",
    "salary":60000
    },
    {
    "name":"Jenny",
    "salary":50000
    }
    ]
    })
    )

// -------------------------------------------

// Practice 3

function maxProduct(nums){
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] < nums[j]){
                let temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
            }
        }
    }
    if (nums.length == 2){
        return nums[0] * nums [1]
    }

    else if ((nums[nums.length - 1] * nums[nums.length - 2]) >= (nums[0] * nums[1])){
        return nums[nums.length - 1] * nums[nums.length - 2]
    }

    else{
        return nums[0] * nums [1]
    }

}

console.log("\n#3")
console.log(maxProduct([5, 20, 2, 6]))
console.log(maxProduct([10, -20, 0, 3]))
console.log(maxProduct([-1, 2]))
console.log(maxProduct([-1, 0, 2]))
console.log(maxProduct([-1, -2, 0]))

// -------------------------------------------

// Practice 4

function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        if (nums.includes(target - nums[i])){
            return [i, nums.indexOf(target - nums[i])]
        }
    }
}

console.log("\n#4")
let result=twoSum([2, 11, 7, 15], 9)
console.log(result)

// -------------------------------------------

// Practice 5

function maxZeros(nums){
    let temp = 0
    let max = 0
    if (nums.includes(0)){
        for (i = 0; i < nums.length; i++){
            if (nums[i] == 0){
                temp ++
                if (temp > max){
                    max = temp
                }
            }
            else if (i != 0){
                temp = 0
            }
        }
    }
    else{
        return 0
    }
    return max
}

console.log("\n#5")
console.log(maxZeros([0, 1, 0, 0]))
console.log(maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]))
console.log(maxZeros([1, 1, 1, 1, 1]))
console.log(maxZeros([0, 0, 0, 1, 1]))
