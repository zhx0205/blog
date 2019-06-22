window.addEventListener('load',function(){
    let thumb=document.querySelectorAll('.tx img');
    //选择头像
    let prevThumb=0;
    for(let i=0;i<thumb.length;i++){
        thumb[i].onclick=function(){
            thumb[prevThumb].style.opacity=0.7;
            this.style.opacity=1;
            prevThumb=i;
        }
    }
    //已输入
    let spans=document.querySelector('#inputSpan');
    let spans1=document.querySelector('#inputSpan1');
    let textarea=document.querySelector('#lytext');
    textarea.onkeyup=function(){
        let value=this.value;
        spans.innerHTML=value.length;
        spans1.innerHTML=textarea.maxLength-value.length;
    }
    //提交
    let message=document.querySelector('#message');
    let submit=document.querySelector('input[type=submit]');
    let userName=document.querySelector("#name");
    let form=document.getElementById("form");

    submit.onclick=function(e){
        e.preventDefault();
        let thumbs=thumb[prevThumb].src;
        let users=userName.value.trim();
        let time =new Date().toISOString().substr(0,10);
        let content =textarea.value;
        let obj={thumbs,users,time,content};
        if(users.length>10){
            alert('姓名不能过长')
            return;
        }else
            if(users.length==0){
                alert('姓名不能为空')
                return;
        }else if(content==0){
                alert('输入内容不能为空')
                return;
        }
        insertMessage(obj);

    }
    document.getElementById("form");


    function insertMessage({thumbs,users,time,content}){
        let str=`
           
                <ul>
                    <li>
                        <div class="user">
                            <div class="tx pl"><img src="${thumbs}" alt=""></div>
                            <div class="messageContent">
                                <div class="userName">${users}<span class="userNameSpan">${time}</span></div>
                                <div class="me">${content}</div>
                            </div>
                        </div>
                    </li>
                </ul>
        `;
        message.innerHTML =str +message.innerHTML;
        form.reset();
       init();
    }
    function init(){
        thumb[prevThumb].style.opacity=0.7;
        thumb[0].style.opacity=1;
        prevThumb=0;
    }
})