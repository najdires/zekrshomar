String.prototype.toPersinaDigit= function(){ var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']; return this.replace(/[0-9]/g, function(w){ return id[+w] }); }
x =String(0);

document.getElementById("counter").innerHTML=x.toPersinaDigit();
function reset(){
    String.prototype.toPersinaDigit= function(){ var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']; return this.replace(/[0-9]/g, function(w){ return id[+w] }); }
    x =String(0);

    document.getElementById("counter").innerHTML=x.toPersinaDigit();
}
function add(){
    String.prototype.toPersinaDigit= function(){ var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']; return this.replace(/[0-9]/g, function(w){ return id[+w] }); }
    String.prototype.toEnglishDigit = function() { var find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']; var replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; var replaceString = this; var regex; for (var i = 0; i < find.length; i++) { regex = new RegExp(find[i], "g"); replaceString = replaceString.replace(regex, replace[i]); } return replaceString; };

    var counter = document.getElementById("counter").innerHTML.toEnglishDigit();
    var x = parseInt(counter);
    var y = parseInt(counter);
    x=x+1;
    y = String(x);

    document.getElementById("counter").innerHTML=y.toPersinaDigit();

}
function sub(){
    String.prototype.toPersinaDigit= function(){ var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']; return this.replace(/[0-9]/g, function(w){ return id[+w] }); }
    String.prototype.toEnglishDigit = function() { var find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']; var replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; var replaceString = this; var regex; for (var i = 0; i < find.length; i++) { regex = new RegExp(find[i], "g"); replaceString = replaceString.replace(regex, replace[i]); } return replaceString; };

    var counter = document.getElementById("counter").innerHTML.toEnglishDigit();
    var x = parseInt(counter);
    var y = parseInt(counter);
    if (x>0){

    
    x=x-1;
    y = String(x);

    document.getElementById("counter").innerHTML=y.toPersinaDigit();}
    }


    ////////////////////////////////
   
    function day0(){
        var day0 = document.getElementById("day0");
        var day1 = document.getElementById("day1");
        var day2 = document.getElementById("day2");
        var day3 = document.getElementById("day3");
        var day4 = document.getElementById("day4");
        var day5 = document.getElementById("day5");
        var day6 = document.getElementById("day6");
        document.getElementById("zekr").innerHTML="یا رب العالمین";
        day0.style.backgroundColor= "#ccae62";
        day0.style.color="#fff";
        day1.style.backgroundColor="#ffffff";
        day1.style.color="#303030";
        day2.style.backgroundColor="#ffffff";
        day2.style.color="#303030";
        day3.style.backgroundColor="#ffffff";
        day3.style.color="#303030";
        day4.style.backgroundColor="#ffffff";
        day4.style.color="#303030";
        day5.style.backgroundColor="#ffffff";
        day5.style.color="#303030";
        day6.style.backgroundColor="#ffffff";
        day6.style.color="#303030";
        reset();

    }
    function day1(){
        var day0 = document.getElementById("day0");
        var day1 = document.getElementById("day1");
        var day2 = document.getElementById("day2");
        var day3 = document.getElementById("day3");
        var day4 = document.getElementById("day4");
        var day5 = document.getElementById("day5");
        var day6 = document.getElementById("day6");
        document.getElementById("zekr").innerHTML="یا ذالجلال و الاکرام";
        day0.style.backgroundColor= "#ffffff";
        day0.style.color="#303030";
        day1.style.backgroundColor="#ccae62";
        day1.style.color="#fff";
        day2.style.backgroundColor="#ffffff";
        day2.style.color="#303030";
        day3.style.backgroundColor="#ffffff";
        day3.style.color="#303030";
        day4.style.backgroundColor="#ffffff";
        day4.style.color="#303030";
        day5.style.backgroundColor="#ffffff";
        day5.style.color="#303030";
        day6.style.backgroundColor="#ffffff";
        day6.style.color="#303030";
        reset();

    }
    function day2(){
        var day0 = document.getElementById("day0");
        var day1 = document.getElementById("day1");
        var day2 = document.getElementById("day2");
        var day3 = document.getElementById("day3");
        var day4 = document.getElementById("day4");
        var day5 = document.getElementById("day5");
        var day6 = document.getElementById("day6");
        document.getElementById("zekr").innerHTML="یا قاضی الحاجات";
        day0.style.backgroundColor= "#ffffff";
        day0.style.color="#303030";
        day1.style.backgroundColor="#ffffff";
        day1.style.color="#303030";
        day2.style.backgroundColor="#ccae62";
        day2.style.color="#fff";
        day3.style.backgroundColor="#ffffff";
        day3.style.color="#303030";
        day4.style.backgroundColor="#ffffff";
        day4.style.color="#303030";
        day5.style.backgroundColor="#ffffff";
        day5.style.color="#303030";
        day6.style.backgroundColor="#ffffff";
        day6.style.color="#303030";
        reset();

    }
    function day3(){
        var day0 = document.getElementById("day0");
        var day1 = document.getElementById("day1");
        var day2 = document.getElementById("day2");
        var day3 = document.getElementById("day3");
        var day4 = document.getElementById("day4");
        var day5 = document.getElementById("day5");
        var day6 = document.getElementById("day6");
        document.getElementById("zekr").innerHTML="یا ارحم الراحمین";
        day0.style.backgroundColor= "#ffffff";
        day0.style.color="#303030";
        day1.style.backgroundColor="#ffffff";
        day1.style.color="#303030";
        day2.style.backgroundColor="#ffffff";
        day2.style.color="#303030";
        day3.style.backgroundColor="#ccae62";
        day3.style.color="#fff";
        day4.style.backgroundColor="#ffffff";
        day4.style.color="#303030";
        day5.style.backgroundColor="#ffffff";
        day5.style.color="#303030";
        day6.style.backgroundColor="#ffffff";
        day6.style.color="#303030";
        reset();

    }
    function day4(){
        var day0 = document.getElementById("day0");
        var day1 = document.getElementById("day1");
        var day2 = document.getElementById("day2");
        var day3 = document.getElementById("day3");
        var day4 = document.getElementById("day4");
        var day5 = document.getElementById("day5");
        var day6 = document.getElementById("day6");
        document.getElementById("zekr").innerHTML="یا حی یا قیوم";
        day0.style.backgroundColor= "#ffffff";
        day0.style.color="#303030";
        day1.style.backgroundColor="#ffffff";
        day1.style.color="#303030";
        day2.style.backgroundColor="#ffffff";
        day2.style.color="#303030";
        day3.style.backgroundColor="#ffffff";
        day3.style.color="#303030";
        day4.style.backgroundColor="#ccae62";
        day4.style.color="#fff";
        day5.style.backgroundColor="#ffffff";
        day5.style.color="#303030";
        day6.style.backgroundColor="#ffffff";
        day6.style.color="#303030";
        reset();

    }
    function day5(){
        var day0 = document.getElementById("day0");
        var day1 = document.getElementById("day1");
        var day2 = document.getElementById("day2");
        var day3 = document.getElementById("day3");
        var day4 = document.getElementById("day4");
        var day5 = document.getElementById("day5");
        var day6 = document.getElementById("day6");
        document.getElementById("zekr").innerHTML="لا اله الا الله  الملک الحق المبین";
        day0.style.backgroundColor= "#ffffff";
        day0.style.color="#303030";
        day1.style.backgroundColor="#ffffff";
        day1.style.color="#303030";
        day2.style.backgroundColor="#ffffff";
        day2.style.color="#303030";
        day3.style.backgroundColor="#ffffff";
        day3.style.color="#303030";
        day4.style.backgroundColor="#ffffff";
        day4.style.color="#303030";
        day5.style.backgroundColor="#ccae62";
        day5.style.color="#fff";
        day6.style.backgroundColor="#ffffff";
        day6.style.color="#303030";
        reset();

    }
    function day6(){
        var day0 = document.getElementById("day0");
        var day1 = document.getElementById("day1");
        var day2 = document.getElementById("day2");
        var day3 = document.getElementById("day3");
        var day4 = document.getElementById("day4");
        var day5 = document.getElementById("day5");
        var day6 = document.getElementById("day6");
        document.getElementById("zekr").innerHTML="اللهم صلی علی محمد و آل محمد و عجل  فرجهم";
        day0.style.backgroundColor= "#ffffff";
        day0.style.color="#303030";
        day1.style.backgroundColor="#ffffff";
        day1.style.color="#303030";
        day2.style.backgroundColor="#ffffff";
        day2.style.color="#303030";
        day3.style.backgroundColor="#ffffff";
        day3.style.color="#303030";
        day4.style.backgroundColor="#ffffff";
        day4.style.color="#303030";
        day5.style.backgroundColor="#ffffff";
        day5.style.color="#303030";
        day6.style.backgroundColor="#ccae62";
        day6.style.color="#fff";
        reset();

    }
