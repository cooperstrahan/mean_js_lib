var _ = {
    map: function(list, mFunction) {
        for(var i = 0; i < list.length; i++){
            list[i] = mFunction(list[i]);
        }
        return list;
    },
    reduce: function(list, red) {
        var num = 0;
        while(list.length > 0){
            num = red(list[0], num);
            list.shift();
        }
        return num;
    },
    find: function(list, fin) {   
      for (var i = 0; i < list.length; i++){
          if(fin(list[i])){
              return list[i];
          }
      }
      return -1;
    },
    filter: function(list, filt) {
        new_List = [];
        for(var i =0; i < list.length; i++){
            if(filt(list[i])){
                new_List.push(list[i]);
            }
        }
        return new_List;
    },
    reject: function(list, rej) {
        new_List = [];
        for (var i =0; i < list.length; i++){
            if(!rej(list[i])){
                new_List.push(list[i]);
            }
        }
        return new_List;
    }
  }
//  you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0; });
console.log(odds); // if things are working right, this will return [2,4,6].

var finder = _.find([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0; });
console.log(finder); // if things are working right, this will return [2,4,6].

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);
// This is a function that just prints the result of another list of instructions

var mapped = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(mapped);