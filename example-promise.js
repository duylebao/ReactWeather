// function getTempCallback(location, callback){
//   callback(undefined, 78)
//   callback('City not found')
// }
//
//
// getTempCallback('San Diego', function(err, temp){
//   if (err){
//     console.log('errer', err);
//   }else{
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found')
//     }, 2000)
//
//   });
// }
//


// getTempPromise('San Diego')
//   .then(function(temp){
//     console.log('Promise success', temp)
//   }, function(err){
//     console.log('Promise error', err)
//   })


function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve( a + b)
    }else{
      reject('Both a and b are not numbers')
    }
  })
}

addPromise(1,5)
  .then(function(sum){
    console.log('success', sum)
  }, function(err){
    console.log('error', err)
  });
