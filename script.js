
    var button =$("<button id='btn1'>Click Me</button>");
    var myName= "Brandon";
    var friends=["jeff", "andy", "tj" ,"kyle","christan","mark","pat","molly","keaton","chad"];
    var i=0;
    

    $(button).insertAfter('#textArea1');
    
    $("body").on("click","#btn1",function(){
        alert("nice message");
    });



    $("#btn2").click(function(){
        $("#textArea1").val("a fun comment");

    });

    $("#div2").css({
        "background-color": "blue",
        "height": "100px",
        "width": "100px"

    })

    $(document).ready(function(){
        $("#div2").mouseover(function(){
            $("#div2").css("background-color", "yellow");
        });
        $("#div2").mouseout(function(){
            $("#div2").css("background-color", "blue");
        });
    });

    $("#paragraph1").click(function(){
        $(this).css("color",rgb());
    })

    function rgb(){
        let r=Math.floor(Math.random()*256);
        let g=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        let random ="rgb("+r+", "+g+", "+b+")";
        return random;
    
    }

    $("#btn3").click(function(){
        $("<span>"+myName+"</span>").appendTo("#div3");
    })
  
    $("#btn4").click(function(){
        if (i<friends.length){    
        let newItem= "<li>" +friends[i]+ "</li>"
        $("ul").append(newItem);
        i++;
        }
    })
