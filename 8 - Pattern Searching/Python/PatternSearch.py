
# A naive pattern search algorithm
#
# Running Time: O(nk) where k is the length of the pattern string. If the pattern is simply repeated multiple times in
# the main text string such that the pattern string matches every character on every outer-loop iteration, then we have
# a running time of O(n^2) in this worst case.
#
# For a more efficient pattern search algorithm, look into the Knuth-Morris-Pratt algorithm which is O(n+k)
def pattern_search(text, pattern):
  print("Input Text:", text, "Input Pattern:", pattern)
  for index in range(len(text)):
    print("Text Index:", index)
    match_count = 0
    for char in range(len(pattern)):
      print("Pattern Index:", char)
      if pattern[char] == text[index + char]:
        match_count += 1
      else:
        break
    if match_count == len(pattern):
      print(pattern, "found at index", index)


text = "HAYHAYNEEDLEHAYHAYHAYNEEDLEHAYHAYHAYHAYNEEDLE"
pattern = "NEEDLE"
#pattern_search(text, pattern)

# New inputs to test
text2 = "SOMEMORERANDOMWORDSTOpatternSEARCHTHROUGH"
pattern2 = "pattern"
text3 = "This   still      works with    spaces"
pattern3 = "works"
text4 = "722615457824612704202682179992552072047396"
pattern4 = "42"

pattern_search(text4, pattern4)