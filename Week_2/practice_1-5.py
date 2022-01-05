# Practice 1

def calculate(min, max):
    sum = 0
    for i in range(min, max + 1):
        sum += i
    return sum

print("#1")
print(calculate(1, 3))
print(calculate(4, 8))

# -------------------------------------------

# Practice 2

def avg(data):
    sum = 0
    staff = data.get("employees")
    for i in range(0, len(staff)):
        sum += staff[i].get("salary")
    return sum / data.get("count")


print("\n#2")
print(avg({
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

# -------------------------------------------

# Practice 3

def maxProduct(nums):
    for i in range (0, len(nums)):
        for j in range (i+1, len(nums)):
            if nums[i] < nums[j]:
                temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp

    return nums[0] * nums[1]

print("\n#3")
print(maxProduct([5, 20, 2, 6]))
print(maxProduct([10, -20, 0, 3]))
print(maxProduct([-1, 2]))
print(maxProduct([-1, 0, 2]))

# -------------------------------------------

# Practice 4

def twoSum(nums, target):
    for i in nums:
        if (target - i) in nums:
            return [nums.index(i),nums.index(target - i)]
            break

print("\n#4")
result = twoSum([2, 11, 7, 15], 9)
print(result)

# -------------------------------------------

# Practice 5

def maxZeros(nums):
    temp = 0
    max = 0
    for i in nums:
        if 0 in nums == False:
            return 0
        
        elif i == 0:
            temp += 1
            if temp > max:
                max = temp
        
        elif i != 0:
            temp = 0

    return max

print("\n#5")
print(maxZeros([0, 1, 0, 0]))
print(maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]))
print(maxZeros([1, 1, 1, 1, 1]))
print(maxZeros([0, 0, 0, 1, 1]))