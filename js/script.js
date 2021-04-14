function showData()
{
    event.preventDefault();
    var country=document.getElementById("cname").value;
    var sDate=document.getElementById("sdate").value;
    var eDate=document.getElementById("edate").value;

    var confirm=document.getElementById("confirm");
    var active=document.getElementById("active");
    var death=document.getElementById("death");

    console.log(sDate);

    if(country=='' || sDate=='' || eDate=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+sDate+"T00:00:00Z&to="+eDate+"T00:00:00Z";

        fetch(url)
        .then((div1) => div1.json())
        .then((div1) => {
            console.log(div1);
            var length=div1.length;
            var index=length-1;

            var c=div1[index].Confirmed;
            var a=div1[index].Active;
            var d=div1[index].Deaths;

            confirm.innerHTML=c;
            active.innerHTML=a;
            death.innerHTML=d;

            document.getElementById("div1").style.display="block";
            
        })
    }
}