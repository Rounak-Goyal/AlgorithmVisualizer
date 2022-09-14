import graph from "./images/graph.png";
import sort from "./sort.png";
import binSearch from "./images/binaryTree.png";
export function getDetails(){
   return [
       {
           id:1,
           title:"Pathfinder(Graph)",
           description:"Visualize graph algorithms like dijkstra, BFS, DFS",
           route:"/pathfinder",
           img:graph
       },
       {
           id:2,
           title:"Iterative Sorting",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:3,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sort
       },
       {
           id:4,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       }

   ]
}