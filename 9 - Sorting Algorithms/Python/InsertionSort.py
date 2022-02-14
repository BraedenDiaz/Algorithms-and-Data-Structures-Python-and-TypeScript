
def insertion_sort(arr):
    for i in range(1, len(arr)):
        current_element = arr[i]

        j = i-1

        while j >= 0 and current_element < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        
        arr[j+1] = current_element

A = [64, 25, 12, 22, 11];

print("PRE SORT: {0}".format(A))
insertion_sort(A);
print("POST SORT: {0}".format(A))
