  const whereCanIPark = function (spots, vehicle) {
    for (let y = 0; y < spots.length; y ++) {
      for (let x = 0; x < spots[y].length; x ++){
        const spot = spots[y][x]
        if (vehicle === 'reguarl'){
          if (spot === 'R') {
            return [x, y];
          }
      
        } else if (vehicle === 'small'){
          if (spot === 'S' || spot === 'R'){
            return [x, y];
          }

        } else if (vehicle === 'motorcycle'){
          if (spot === 'S' || spot === 'R' || spot === 'M'){
            return [x, y];
          }
           
        }
      }
   }
return false
  
  };
  