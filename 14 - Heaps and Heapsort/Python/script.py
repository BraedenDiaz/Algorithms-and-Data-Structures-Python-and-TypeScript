# import random number generator
from random import randrange
# import heap class
from max_heap import MaxHeap 

# make an instance of MaxHeap
max_heap = MaxHeap()

# populate max_heap with random numbers
random_nums = [randrange(1, 101) for n in range(6)]
for el in random_nums:
  max_heap.add(el)


# test it out, is the maximum number at index 1?
print(max_heap.heap_list)

def heapsort(lst):
  sort = []
  max_heap = MaxHeap()
  for idx in lst:
    max_heap.add(idx)
  while max_heap.count > 0:
    max_value = max_heap.retrieve_max()
    sort.insert(0, max_value)
  return sort

my_list = [99, 22, 61, 10, 21, 13, 23]
sorted_list = heapsort(my_list)
print(sorted_list)