function gcdlcm(a, b) {
    var answer = [];
       var z;
       var x = a;
       var y = b;
       while (true) {//유클리드 호제법

           z = x % y;
           if (0 === z)
               break;

           x = y;
           y = z;

       }
       answer[0]=y;
       answer[1]=(a*b/y);
       return answer;

}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));