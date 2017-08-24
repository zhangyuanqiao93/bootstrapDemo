/**
 * Created by Bridge on 2017/7/8.
 */

//h5的新标签
var form = new FormData;
form.append("username","XX");
form.append("password","123456");

var req = new XMLHttpRequest();
//url：文件在服务器上的位置
req.open("POST","${pageContext.request.contextPath}/public/testupload",false);
req.send();

//or

$.ajax({
    url:"${pageContext.request.contextPath}/public/testupload",
    type:"post",
    data:form,
    dataType:"json",
    processData:false,
    contentType:false,
    success:function(data){
        window.clearInterval(timer);//取消定时器
        console.log("over..");
    },
    error:function () {
        console.log("ERROR");
    }
});



function loadXmlDoc() {
    alert("123");
    var htmlobj;
    $(document).ready(function () {
        $('#b1').click(function () {
            htmlobj = $.ajax({url:"/ajax/ajax.txt"},async,false);
            $('#myDiv').html(htmlobj.responseText);
        });
    });
}
