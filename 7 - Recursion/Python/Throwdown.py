# This file contains iterative and recursive versions of the same functions so you can compare them
# If the recursive version of a function is not here, check the Recursion.py file

# Iterative factorial
def factorial(n):
  answer = 1

  for i in range(1, n+1):
    answer *= i
  
  return answer

# test cases
print(factorial(3) == 6)
print(factorial(0) == 1)
print(factorial(5) == 120)

# My Iterative fibonacci
# Time: O(n)
# Space: O(1) - The number of variables used stays the same regardless of n
def fibonacci(n):
  if n < 0:
    ValueError("Input 0 or greater only!")
  if n <= 1:
    return n

  fibPrev = 0
  fibCurr = 1

  for i in range(2, n+1):
    temp = fibCurr
    fibCurr += fibPrev
    fibPrev = temp

  return fibCurr

# A second way - from Codecademy
#
# Time: O(n)
# Space: O(n) - The size of the list gets larger the larger n is. Mine above has better space.
#
# define a fibs list of [0, 1]
# if the input is <= to len() of fibs - 1
  # return value at index of input
# else:
  # while input is > len() of fibs - 1
    # next_fib will be fibs[-1] + fibs[-2]
    # append next_fib to fibs # Uses more space here
# return value at index of input


# test cases
print(fibonacci(3) == 2)
print(fibonacci(7) == 13)
print(fibonacci(0) == 0)

# Iterative sum_digits
# Linear - O(N), where "N" is the number of digits in the number
def sum_digits(n):
  if n < 0:
    ValueError("Inputs 0 or greater only!")
  result = 0
  while n is not 0:
    result += n % 10
    n = n // 10
  return result + n
 
sum_digits(12)
# 1 + 2
# 3
sum_digits(552)
# 5 + 5 + 2
# 12
sum_digits(123456789)
# 1 + 2 + 3 + 4...
# 45

# Recursive find_min
def find_min(my_list):
  min = None

  if len(my_list) == 0:
    return min
  
  min = my_list[0]
  otherMin = find_min(my_list[1:])

  if otherMin == None:
    return min
  elif otherMin < min:
    return otherMin
  else:
    return min

# test cases
print(find_min([42, 17, 2, -1, 67]) == -1)
print(find_min([]) == None)
print(find_min([13, 72, 19, 5, 86]) == 5)

# Iterative find_min
def find_min2(my_list):
  min = None
  for element in my_list:
    if not min or (element < min):
      min = element
  return min
 
find_min2([42, 17, 2, -1, 67])
# -1
find_min2([])
# None
find_min2([13, 72, 19, 5, 86])
# 5

# Recursive is_palindrome
# Time: Quadratic O(n^2) - Because of the string copy on each recursive call
def is_palindrome(my_string):
  if len(my_string) == 0:
    return True
  
  if my_string[0] != my_string[-1]:
    return False
  
  return is_palindrome(my_string[1:-1])


# test cases
print(is_palindrome("abba") == True)
print(is_palindrome("abcba") == True)
print(is_palindrome("") == True)
print(is_palindrome("abcd") == False)

# Iterative is_palindrome
# Time: Quadratic O(n^2) - Because of the string copy on each loop iteration
def is_palindrome2(my_string):
  while len(my_string) > 1:
    if my_string[0] != my_string[-1]:
      return False
    my_string = my_string[1:-1] # Copy string except the first and last characters
  return True 
 
is_palindrome2("abba")
# True
is_palindrome2("abcba")
# True
is_palindrome2("")
# True
is_palindrome2("abcd")
# False

# A more performat iterative version of is_palindrome
# Time: Linear O(n)
def is_palindrome3(my_string):
  string_length = len(my_string)
  middle_index = string_length // 2
  for index in range(0, middle_index):
    opposite_character_index = string_length - index - 1
    if my_string[index] != my_string[opposite_character_index]:
      return False  
  return True

is_palindrome3("abba")
# True
is_palindrome3("abcba")
# True
is_palindrome3("")
# True
is_palindrome3("abcd")
# False

# Iterative multiplication
# Note: Does not work with negative numbers
def multiplication(num_1, num_2):
  result = 0
  for count in range(0, num_2):
    result += num_1
  return result
 
multiplication(3, 7)
# 21
multiplication(5, 5)
# 25
multiplication(0, 4)
# 0

# Recursive multiplication
# Note: Does not work with negative numbers
def multiplication2(num1, num2):
  if num1 == 0 or num2 == 0:
    return 0
  
  return num1 + multiplication(num1, num2 - 1)


# test cases
print(multiplication2(3, 7) == 21)
print(multiplication2(5, 5) == 25)
print(multiplication2(0, 4) == 0)

###################################### Advanced Example ######################################


# Recursive function to find the depth of a Binary Search Tree (BST)
def depth(tree):
  result_left = 0
  result_right = 0

  if not tree["left_child"] and not tree["right_child"]:
    return 1

  if tree["left_child"]:
    result_left += 1
    result_left += depth(tree["left_child"])

  
  if tree["right_child"]:
    result_right += 1
    result_right += depth(tree["right_child"])

  
  if result_left >= result_right:
    return result_left
  else:
    return result_right

# Codecademy's recursive function to find the depth of a Binary Search Tree (BST)
def depth2(tree):
  if tree == None:
    return 0
  
  left_depth = depth(tree["left_child"])
  right_depth = depth(tree["right_child"])

  if left_depth > right_depth:
    return left_depth + 1
  else:
    return right_depth + 1

# HELPER FUNCTION TO BUILD TREES
def build_bst(my_list):
  if len(my_list) == 0:
    return None

  mid_idx = len(my_list) // 2
  mid_val = my_list[mid_idx]

  tree_node = {"data": mid_val}
  tree_node["left_child"] = build_bst(my_list[ : mid_idx])
  tree_node["right_child"] = build_bst(my_list[mid_idx + 1 : ])

  return tree_node

# HELPER VARIABLES
tree_level_1 = build_bst([1])
tree_level_2 = build_bst([1, 2, 3])
tree_level_4 = build_bst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) 

# test cases
print(depth(tree_level_1) == 1)
print(depth(tree_level_2) == 2)
print(depth(tree_level_4) == 4)

# depth2() test cases
print(depth2(tree_level_1) == 1)
print(depth2(tree_level_2) == 2)
print(depth2(tree_level_4) == 4)

####################################################################

# Iterative function to find the depth of a Binary Search Tree (BST)
def depth3(tree):
  result = 0
  # our "queue" will store nodes at each level
  queue = [tree]
  # loop as long as there are nodes to explore
  while queue:
    # count the number of child nodes
    level_count = len(queue)
    for child_count in range(0, level_count):
      # loop through each child
      child = queue.pop(0)
     # add its children if they exist
      if child["left_child"]:
        queue.append(child["left_child"])
      if child["right_child"]:
        queue.append(child["right_child"])
    # count the level
    result += 1
  return result
 
two_level_tree = {
"data": 6, 
"left_child":
  {"data": 2}
}
 
four_level_tree = {
"data": 54,
"right_child":
  {"data": 93,
   "left_child":
     {"data": 63,
      "left_child":
        {"data": 59}
      }
   }
}
 
 
depth3(two_level_tree)
# 2
depth3(four_level_tree)
# 4