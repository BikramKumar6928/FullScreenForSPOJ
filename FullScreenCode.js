    body=document.getElementsByTagName('body');
    var starter=document.createElement('a');
    starter.id='fullscreen';
    starter.onclick=function(){
        var a= window.location.pathname;
        var code=a.substring(9,a.length);
        var left="https://www.spoj.com/problems"+code;
        var right="https://www.spoj.com/submit"+code;
        //removing all the nodes
        var body=document.getElementsByTagName('body');
        while(body[0].hasChildNodes()){
            body[0].removeChild(body[0].lastChild);
        }
        //adding the elements
        var f1=document.createElement('iframe');
        f1.id='frame1';
        f1.src=left;
        f1.class='col-md-6';
        f1.style='overflow:hidden; height:100vh;';
        f1.height="100%";
        f1.width="50%";
        body[0].appendChild(f1);

        var f2=document.createElement('iframe');
        f2.id='frame2';
        f2.src=right;
        f2.class='col-md-6';
        f2.style='overflow:hidden; height:100vh;';
        f2.height="100%";
        f2.width="50%";
        body[0].appendChild(f2);
        //making changes
        return true;
    };
    starter.style="position: fixed; right: 0px; top: 0px";
    var textnode = document.createTextNode("Go Full Screen");
    starter.appendChild(textnode);
    body[0].appendChild(starter);
