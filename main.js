function telephoneCheck(str) {
    let strToCheck = '';
    const num = '0123456789';
    // with country code  
    if(str.startsWith('1 ') || str.startsWith('1(')){
       for(let i=0; i<str.length; i++){
        if(i<2){
            strToCheck += str[i]; // preserve first 2 ('1 ' or '1(')
        }else{
            if(num.includes(str[i])){  // transform  num
                strToCheck += '5';
            }else{
                strToCheck += str[i]; // donot transform not nun
            }
        }
       }

       switch(strToCheck){
        case '1 555 555 5555':
            return true;
            break;
        case '1 555-555-5555':
            return true;
            break;
        case '1 (555) 555-5555':
            return true;
            break;
        case '1(555)555-5555':
            return true;
            break;
        default:
            return false;    
       }

    }else{       //  without country code
        

    }                                      
    
  }
  











  // test
  //telephoneCheck("555-555-5555");
  //
  