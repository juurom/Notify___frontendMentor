    /*습관적으로 엔터로 입력을 마무리해서
    엔터키로 submit 버튼을 누른 것과 같은 효과를 주었음*/

    /*JS에서는
    object.addEventListener('keypress', function(key)
    그러나 jquery에서는 아래와 같이 해야 함*/
$("#userinput").on("keyup", function(key){
    if(key.key=='Enter'){
        $("#submit").click();
    }
})

$("#submit").click(function(event){
    event.preventDefault();
    var email=$("#userinput").val();
    /*input box 안의 값*/

    var useremail="";
    /*입력받은 옳은 이메일*/

    var regExp= /^[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+@[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+.[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+$/;
    /*이메일 유효성 검사 정규식
    참고: https://webisfree.com/2016-05-12/%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%A3%BC%EC%86%8C-%EA%B2%80%EC%A6%9D-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D */

    if(email==""){/*공백일 경우*/
        $("#error").removeClass("hidden");
        $("#error").text("이메일 주소를 입력해주세요.");
    }
    else{
        if(!regExp.test(email)){
            $("#error").removeClass("hidden");
            $("#error").text("이메일 형식을 확인해주세요.");
        }
        else {
            $("#error").addClass("hidden");
            $("#error").text("text area");
            useremail=email;
            console.log(useremail);
        }
    }
});



