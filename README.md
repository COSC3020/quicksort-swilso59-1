[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

- The $Theta$ bound for the worstcase runtime is $\Theta\left(n^{2}\right)$.
- The worst case scenario would be if the array is already sorted or the array is in reverse order.
- The partition slection will always choose the last element form the array which will cause the partions to be unbalanced.
- The partition step iterates through the array once and will re arrange the elements based on the pivot which gives us   
$O\left(n\right)$
- In the worst case for the stack minipulation we would get n operations combine both these will give us a quadradic worst case time complexity. 


https://www.geeksforgeeks.org/iterative-quick-sort/
https://www.geeksforgeeks.org/when-does-the-worst-case-of-quicksort-occur/
quicksort-IshitaPatel18
