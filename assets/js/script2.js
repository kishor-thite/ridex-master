var money=0;
         function fn()
      {var c1=document.getElementById("cars").value;
      var m1=document.getElementById("month").value;
      var fare=0;
      parseInt(m1);
        
        if(c1="BMW 4 Series")
        {
           fare=(1.5*m1);
          document.getElementById("fare").innerHTML="total value is: "+fare+"lakhs";
        }
        if(c1="BMW 4 Series GTI")
        {
          fare=(1*m1);
          document.getElementById("fare").innerHTML="total value is: "+fare+"lakhs";
        }
        if(c1="Cadillac Escalade")
        {
           fare=(3*m1);
          document.getElementById("fare").innerHTML="total value is: "+fare+"lakhs";
        }
        if(c1="Volkswagen T-Cross")
        {
          fare=(0.65*m1);
          document.getElementById("fare").innerHTML="total value is: "+fare+"lakhs";
        }
        if(c1="Toyota RAV4")
        {
          fare=(0.45*m1);
          document.getElementById("fare").innerHTML="total value is: "+fare+"lakhs";
        }
        if(c1="BMW 3 Series")
        {
           fare=(0.55*m1);
          document.getElementById("fare").innerHTML="total value is: "+fare+"lakhs";
        }
        money=fare;
        }
        function fn2()
        {
          var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var c1=document.getElementById("cars").value;
      var m1=document.getElementById("month").value;
          document.getElementById("nam").innerHTML=name;
          document.getElementById("mail").innerHTML=email;
          document.getElementById("car").innerHTML=c1;
          document.getElementById("mon").innerHTML=m1;
          document.getElementById("tot").innerHTML=money+" lakhs";
        }