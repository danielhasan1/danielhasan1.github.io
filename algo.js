class SortingAlgos {
    constructor() {
      this.val = parseInt(document.getElementById("myRange").value);
  
        this.randomize();
      this.ab = document.getElementsByClassName('bar');
      this.swapNode = document.getElementById('swaps');
      this.comparisonNode = document.getElementById('comparisons');
      this.size = this.ab.length;
      this.running = false;
      
      this.max = 180;
      
    }
    setcons(){
      this.val = parseInt(document.getElementById("myRange").value);
      this.randomize();
      this.ab = document.getElementsByClassName('bar');
      this.swapNode = document.getElementById('swaps');
      this.comparisonNode = document.getElementById('comparisons');
      this.size = this.ab.length;
  
    }
    async checkSorted(opt){
        var ab = this.ab;
        // console.log(ab);
        for (var i = 0; i < this.size-1; i++){
          if(parseInt(ab[i].style.height) <= parseInt(ab[i+1].style.height)){
            if (opt == 2){
              await resolveAfter2Seconds(1000/this.val*2-50);
              ab[i].style.backgroundColor = "#4CAF50";
              ab[i+1].style.backgroundColor = 'red';
            }
          continue;}
          else{
            if (opt==2){alert("Algorithms might be malfunctioning at the moment please report it!")}
            return false;
          }
        }
        if(opt==2)
        {
          ab[i].style.backgroundColor = "#4CAF50";
          await resolveAfter2Seconds(1000);
          for (var i = 0; i < this.size; i++)
          
          ab[i].style.backgroundColor = "rgb(218, 26, 170)";
        }
        return true;
    }
    // insertion sort
    checkStatus(){
      if(this.running) {
        alert('running insertion sort algo please wait till it completes');
        return true;
      }
    }
    
    randomize() {
      if (this.checkStatus()) return ;
        this.cd = document.getElementById("graph-body");
        this.cd.innerHTML = "";
  
        var max = 600, min = 1;
        var left = 0;
        var width = parseInt((screen.width / (this.val * 2 )));
        if (width < 3)
        width = 3;
        left = parseInt(screen.width / 2) - parseInt(this.val * 2 * width) / 2;
        console.log(left);
        
        // console.log(width);
        // console.log(this.val)
        for(var i = 0; i <this.val ; i++){
          left += (width*2) + 3;
          let bar1 = "<td class='sent bar bar' style='height:" + Math.floor(Math.random() * (max - min + 1) + min) + "px; width:"+width+"px;'"+"></td>" ;
          let bar2 = "<td class='paid bar bar' style='height:" + Math.floor(Math.random() * (max - min + 1) + min) + "px; width:"+width+"px;"+"left:"+width+"px;'></td>";
          let node = "<tr style='left:" + left + "px;'>"+ bar1 + bar2 + "</tr>";
          this.cd.insertAdjacentHTML( 'beforeend', node );
        }
      }
    async insertionSort(){
      if(await this.checkSorted(1)) {alert('already sorted'); return ;}
      if (this.checkStatus()) return ;
      var button = document.getElementById('isort');
      button.style.backgroundColor = 'red';
      this.running = true;
      this.swapNode.innerHTML = "0";
      this.comparisonNode.innerHTML = "0";
      var ab = this.ab;
      var size = this.size;
      var key, i, j, isSwaped, color1, color2, color3, swaps, comparisons;
      swaps = comparisons = 0;
      for (var i = 1; i < size; i++){
        key = parseInt(ab[i].style.height);
        j = i - 1;
        color1 = ab[i].style.backgroundColor;
        ab[i].style.backgroundColor = 'red';
        comparisons += 1;
        this.comparisonNode.innerHTML = comparisons;
        isSwaped = false;
        while (j >= 0 && parseInt(ab[j].style.height) > key){
          comparisons +=1;
          isSwaped = true;
          this.comparisonNode.innerHTML = comparisons;
          swaps +=1;
          this.swapNode.innerHTML = swaps;
          color2 = ab[j].style.backgroundColor;
          // await resolveAfter2Seconds();
          ab[j].style.backgroundColor = 'yellow';
          ab[j+1].style.height = ab[j].style.height;
          await resolveAfter2Seconds(1000/this.val*2-50);
          console.log(1000/this.val*2-50);
          ab[j].style.backgroundColor = color2;
          j--;
        }
        if (isSwaped){
        swaps +=1;
        this.swapNode.innerHTML = swaps;
        isSwaped = false;
        }
        color3 = ab[j+1].style.backgroundColor;
        ab[j+1].style.backgroundColor = 'green';
        await resolveAfter2Seconds(1000/this.val*2-50);
        ab[j+1].style.height = key +'px';
        ab[j+1].style.backgroundColor = color3;
        ab[i].style.backgroundColor = color1;
      }
      await this.checkSorted(2);
      button.style.backgroundColor = '';
      this.running = false;
    }
  
    // bubble sort
    async bubbleSort() {
      if(await this.checkSorted(1)) {alert('already sorted'); return ;}
      if (this.checkStatus()) return ;
      this.running = true;
      var button = document.getElementById('bsort');
      button.style.backgroundColor = 'red';
      this.swapNode.innerHTML = "0";
      this.comparisonNode.innerHTML = "0";
      var ab = this.ab;
      var size = this.size;
      var color1, color2, color3, i, j, swaps, comparisons;
      swaps = comparisons = 0;
         for (i = 0; i < size - 1; i++){
        color1 = ab[i].style.backgroundColor;
        // ab[i].style.backgroundColor = "red";
              for(j = 0; j < size - i - 1; j++){
          comparisons += 1;
          this.comparisonNode.innerHTML = comparisons;
          color1 = ab[j].style.backgroundColor;
          ab[j].style.backgroundColor = "red";
                  if(parseInt(ab[j].style.height) > parseInt(ab[j + 1].style.height)){
            swaps += 1;
            this.swapNode.innerHTML = swaps;
                      var temp = ab[j+1].style.height;
            color2 = ab[j].style.backgroundColor;
            color3 = ab[j+1].style.backgroundColor;
            // await resolveAfter2Seconds();
            // ab[j+1].style.backgroundColor
            
            ab[j+1].style.backgroundColor = "yellow";
            // await resolveAfter2Seconds();
            ab[j].style.backgroundColor = color2;
            ab[j+1].style.height = ab[j].style.height;
            await resolveAfter2Seconds(1000/this.val*2-50);
            ab[j+1].style.backgroundColor = color3;
            // await resolveAfter2Seconds();
                  ab[j].style.height = temp;
                  
          }
          ab[j].style.backgroundColor = color1;
        }
        
    }
    await this.checkSorted(2);
    
    button.style.backgroundColor = '';
      this.running = false;
    }
    async partition (ab,  low, high)  
      {   
          var pivot = parseInt(ab[high].style.height); // pivot  
          var i = (low - 1); // Index of smaller element  
            var comparisons, swaps, color1, color2, temp;
            comparisons = parseInt(this.comparisonNode.innerHTML);
            swaps = parseInt(this.swapNode.innerHTML);
          for (var j = low; j <= high - 1; j++)  
          {  
              comparisons += 1;
              this.comparisonNode.innerHTML = comparisons;
              // If current element is smaller than the pivot  
              if (parseInt(ab[j].style.height) < pivot)  
              {  swaps += 1;
                  this.swapNode.innerHTML = swaps;
                  i++; // increment index of smaller element  
                    temp = ab[i].style.height;
                    color1 = ab[i].style.backgroundColor;
                    color2 = ab[j].style.backgroundColor;
                    ab[i].style.backgroundColor = "red";
                
                    await resolveAfter2Seconds(1000/this.val*2-50);
                    ab[j].style.backgroundColor = "yellow";
                    await resolveAfter2Seconds(1000/this.val*2-50);
                    ab[i].style.backgroundColor = color1;
                    ab[j].style.backgroundColor = color2;
                  ab[i].style.height = ab[j].style.height;
                  ab[j].style.height = temp;  
              }  
          }  
        
          // [ab[i + 1], ab[high]] = [ab[high], ab[i+1]]; 
          temp = ab[i+1].style.height;
          color1 = ab[i+1].style.backgroundColor;
            color2 = ab[high].style.backgroundColor;
            ab[i+1].style.backgroundColor = "green";
            await resolveAfter2Seconds(1000/this.val*2-50);
            ab[high].style.backgroundColor = "purple";
            ab[i+1].style.backgroundColor = color1;
            await resolveAfter2Seconds(1000/this.val*2-50);
            ab[high].style.backgroundColor = color2;
          ab[i+1].style.height = ab[high].style.height;
          ab[high].style.height = temp; 
          return (i + 1);  
      }  
  
      async quickSort(ab, low, high)  
      {  
          if (low < high)  
          {  
              /* pi is partitioning index, arr[p] is now  
              at right place */
              const pi = await this.partition(ab, low, high);  
              // Separately sort elements before  
              // partition and after partition  
              await this.quickSort(ab, low, pi - 1);  
              await this.quickSort(ab, pi + 1, high);  
          }  
      }
      async doquick()
      {
            if(await this.checkSorted(1)) {alert('already sorted'); return ;}
          if (this.checkStatus()) return ;
          this.running = true;
      var button = document.getElementById('qsort');
      button.style.backgroundColor = 'red';
          this.swapNode.innerHTML = "0";
      this.comparisonNode.innerHTML = "0";
      await this.quickSort(this.ab, 0, this.size - 1);
      await this.checkSorted(2);
      
      button.style.backgroundColor = '';
      this.running = false;
      }
      async mergeHalves(ab, left, middle, right){
        var swaps, comparisons, i, j, index, size1, size2, color1, color2, color3;
        swaps = parseInt(this.swapNode.innerHTML);
        comparisons = parseInt(this.comparisonNode.innerHTML);
        size1 = middle - left + 1;
        size2 = right - middle;
        var leftArray = []; var  rightArray = [];
        
        for (i = 0; i < size1; i++){
          leftArray[i] = parseInt(ab[i+left].style.height);
        }
        for (j = 0; j < size2; j++){
          rightArray[j] = parseInt(ab[middle+1+j].style.height);
        }
        i = 0, j = 0;
        index = left;
        while (i < size1 && j < size2){
          comparisons += 1;
          
          this.comparisonNode.innerHTML = comparisons;
          if (leftArray[i] < rightArray[j]){
               if ((i != index) && ((i + index) <= (this.size - 1))) {
              color2 = ab[i + index].style.backgroundColor;
              ab[i + index].style.backgroundColor = 'red';
          }
            swaps += 1;
            this.swapNode.innerHTML = swaps;
            color1 = ab[index].style.backgroundColor;
            ab[index].style.backgroundColor = 'yellow';
            await resolveAfter2Seconds(1000/this.val*2-50);
            ab[index].style.height = leftArray[i] + 'px';
            ab[index].style.backgroundColor = color1;
            // await resolveAfter2Seconds();
            if((i + index) <= (this.size - 1)){
                 await resolveAfter2Seconds(1000/this.val*2-50);
            ab[i + index].style.backgroundColor = color2;
              }
            i++;
          }
          else{
              if (j != index && j + index <= this.size - 1){
              color3 = ab[j + index].style.backgroundColor;
              ab[j + index].style.backgroundColor = 'red';
          }
            swaps += 1;
            this.swapNode.innerHTML = swaps;
            color1 = ab[index].style.backgroundColor;
            ab[index].style.backgroundColor = 'yellow';
            await resolveAfter2Seconds(1000/this.val*2-50);
            ab[index].style.height = rightArray[j] + 'px';
            ab[index].style.backgroundColor = color1;
            // await resolveAfter2Seconds();
            if (j + index <= this.size - 1){
                 await resolveAfter2Seconds(1000/this.val*2-50);
          ab[j + index].style.backgroundColor = color3;}
            j++;
          }
          
          
          
          index++;
        }
        while (i < size1){
          swaps += 1;
           this.swapNode.innerHTML = swaps;
          color1 = ab[index].style.backgroundColor;
          ab[index].style.backgroundColor = 'green';
          await resolveAfter2Seconds(1000/this.val*2-20);
          ab[index].style.height = leftArray[i] + 'px';
          await resolveAfter2Seconds(1000/this.val*2-50);
          ab[index].style.backgroundColor = color1;
          i++;
          index++;
        }
        while (j < size2){
          swaps += 1;
          this.swapNode.innerHTML = swaps;
          color1 = ab[index].style.backgroundColor;
          ab[index].style.backgroundColor = 'green';
          await resolveAfter2Seconds(1000/this.val*2-50);
          ab[index].style.height = rightArray[j] + 'px';
          await resolveAfter2Seconds(1000/this.val*2-50);
          ab[index].style.backgroundColor = color1;
          j++;
          index++;
        }
      }
      async mergeSort(ab, left, right){
        if (left < right) {
          var middle = parseInt((left + right) / 2);
          await this.mergeSort(ab, left, middle);
          await this.mergeSort(ab, middle + 1, right);
          await this.mergeHalves(ab, left, middle, right);
        }
      }
      async domerge(){
          if(await this.checkSorted(1)) {alert('already sorted'); return ;}
          if (this.checkStatus()) return ;
      var button = document.getElementById('msort');
      button.style.backgroundColor = 'red';
          this.running = true;
          this.swapNode.innerHTML = "0";
      this.comparisonNode.innerHTML = "0";
      await this.mergeSort(this.ab, 0, this.size - 1);
      await this.checkSorted(2);
      button.style.backgroundColor = '';
      this.running = false;
      
      }
      
  
  }
  
  var sinit   = new SortingAlgos();
  function resolveAfter2Seconds(i) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, i);
    });
  }