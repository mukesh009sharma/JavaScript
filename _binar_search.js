

        function binary() {
            let s = 0, m, e, search, i, flag = 0;
            let a = [67, 45, 76, 44, 98, 99]; 
            e = a.length - 1;
            search = parseInt(prompt("Enter the number to search: "));
            
            for (i = 0; i <= a.length; i++) {
                m = parseInt((s + e) / 2);
                if (search == a[m]) {
                    flag = 1;
                    break;
                } else if (search > a[m]) {
                    s = m + 1;
                } else {
                    e = m - 1;
                }
            }

            if (flag == 1) {
                alert("Number is present.");
            } else {
                alert("Number is not present.");
            }
        }
    
// <!-- 
//     <button onclick="binary()">Start Binary Search</button> -->
