# Define sum_to_one() below...
def sum_to_one(n):
  if n == 1:
    return n
  
  print("Recursing with input: {0}".format(n))
  return n + sum_to_one(n - 1)

def sum_digits(n):
  if n < 10:
    return n
  else:
    last_digit = n % 10
    # What argument is every digit except the last?
    return last_digit + sum_digits(n // 10)

  # Define factorial() below:
def factorial(n):
  if n < 2:
    return 1
  
  return n * factorial(n - 1)

def power_set_iter(set):
  power_set_size = 2**len(set)
  result = []
 
  for bit in range(0, power_set_size):
    sub_set = []
    for binary_digit in range(0, len(set)):
      if((bit & (1 << binary_digit)) > 0):
        sub_set.append(set[binary_digit])
    result.append(sub_set)
  return result

def power_set(my_list):
    # base case: an empty list
    if len(my_list) == 0:
        return [[]]
    # recursive step: subsets without first element
    power_set_without_first = power_set(my_list[1:])
    # subsets with first element
    with_first = [ [my_list[0]] + rest for rest in power_set_without_first ]
    # return combination of the two
    return with_first + power_set_without_first

# define flatten() below...
def flatten(my_list):
  result = []

  for element in my_list:
    if isinstance(element, list):
      print("List found!")

      flat_list = flatten(element)

      result = result + flat_list
    else:
      result.append(element)

  return result

# define the fibonacci() function below...
def fibonacci(n):
  #print("Called")
  if n == 1:
    return 1
  if n == 0:
    return 0
  return fibonacci(n - 2) + fibonacci(n - 1)

# Define build_bst() below...
def build_bst(my_list):
  if len(my_list) == 0:
    return "No Child"
  
  middle_idx = int(len(my_list) / 2)
  middle_value = my_list[middle_idx]

  print("Middle index: {0}".format(middle_idx))
  print("Middle value: {0}".format(middle_value))

  tree_node = {
    "data": middle_value
  }

  tree_node["left_child"] = build_bst(my_list[:middle_idx])
  tree_node["right_child"] = build_bst(my_list[middle_idx + 1:])

  return tree_node

### reserve for testing...
planets = ['mercury', 'venus', ['earth'], 'mars', [['jupiter', 'saturn']], 'uranus', ['neptune', 'pluto']]
universities = ['MIT', 'UCLA', 'Stanford', 'NYU', 'UofU']
power_set_of_universities = power_set(universities)

# For testing BST
sorted_list = [12, 13, 14, 15, 16]
binary_search_tree = build_bst(sorted_list)


print(sum_to_one(7))
sum_digits(12) # 3
sum_digits(194) # 14
print(factorial(4))
# Will stack overflow due to max recursion depth
# print(factorial(56151643515))

for set in power_set_of_universities:
  print(set)

print(flatten(planets))
print(fibonacci(4))
print(binary_search_tree)