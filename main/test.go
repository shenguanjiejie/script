package main

import (
	"builtin"
	"fmt"
)

func main() {
	t := []int{0, 1, 2, 3, 4, 5}

	Pop(t)
	PrintIterator(t)
	RemoveObject(t, 2)
	PrintIterator(t)
	t = append(t, 3)
}

func Pop(slice []builtin.Type) {
	if len(slice) == 0 {
		return
	}
	slice = slice[0 : len(slice)-1]
}

func RemoveObject(slice []builtin.Type, index int) {
	if len(slice) < index {
		return
	}
	slice = append(slice[0:index], slice[index+1:]...)
}

func PrintIterator(iterator []builtin.Type) {
	for _, v := range iterator {
		fmt.Println(v)
	}
}

// func (arr interface{}) add(new builtin.Type) {

// 	// arr = make([]builtin.Type, 0)
// 	// arr = append(arr, new)
// 	arr = nil
// }
