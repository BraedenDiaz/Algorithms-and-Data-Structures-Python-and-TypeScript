class Node:
  def __init__(self, value, next_node=None):
    self.value = value
    self.next_node = next_node
    
  def get_value(self):
    return self.value
  
  def get_next_node(self):
    return self.next_node
  
  def set_next_node(self, next_node):
    self.next_node = next_node

class LinkedList:
  def __init__(self, value=None):
    self.head_node = Node(value)
  
  def get_head_node(self):
    return self.head_node
  
  def insert_beginning(self, new_value):
    new_node = Node(new_value)
    new_node.set_next_node(self.head_node)
    self.head_node = new_node
    
  def stringify_list(self):
    string_list = ""
    current_node = self.get_head_node()

    while current_node:
      if current_node.get_value() != None:
        string_list += str(current_node.get_value()) + "\n"

      current_node = current_node.get_next_node()

    return string_list
  
  def remove_node(self, value_to_remove):
    current_node = self.get_head_node()

    if current_node.get_value() == value_to_remove:
      self.head_node = current_node.get_next_node()
    else:
      while current_node:
        next_node = current_node.get_next_node()
        
        # Note that an error will be cause right here if the user tries to remove an element not in the list.
        # See the example below.
        if next_node.get_value() == value_to_remove:
          current_node.set_next_node(next_node.get_next_node())
          current_node = None
        else:
          current_node = next_node
    
  def swap_nodes(self, val1, val2):
    node1 = self.head_node
    node2 = self.head_node
    node1_prev = None
    node2_prev = None

    if val1 == val2:
      print("Elements are the same - no swap needed")
      return

    while node1 is not None:
        if node1.get_value() == val1:
            break
        node1_prev = node1
        node1 = node1.get_next_node()
    
    while node2 is not None:
        if node2.get_value() == val2:
            break
        node2_prev = node2
        node2 = node2.get_next_node()
    
    if node1 is None or node2 is None:
      print("Swap not possible - one or more element is not in the list")
      return
    
    if node1_prev is None:
        self.head_node = node2
    else:
        node1_prev.set_next_node(node2)
    
    if node2_prev is None:
      self.head_node = node1
    else:
      node2_prev.set_next_node(node1)
    
    temp = node1.get_next_node()
    node1.set_next_node(node2.get_next_node())
    node2.set_next_node(temp)

# Test your code
ll = LinkedList(5)
ll.insert_beginning(70)
ll.insert_beginning(5675)
ll.insert_beginning(90)

# Note: This will cause an error since 1 is not present and next_node is null in the remove_node function.
#ll.remove_node(1)

print(ll.stringify_list())

# Swap Test
ll.swap_nodes(70, 5675)
print(ll.stringify_list())