// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      
      args = args.sort(function(a, b){return a - b; });
      return args[0];
      
    }
}