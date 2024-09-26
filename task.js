<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #rio{
            border:2px solid red;
            height: 100px;
            width:100px;
            border-radius: 100%;
            text-align: center;
            translate: 990px;
            padding:10px 20px;
            margin:20px 30px;
            position:relative;
            bottom:260px;
                 
        }
        #lio{
            border:2px solid yellow;
            height:100px;
            width:100px;
            border-radius: 100%;
            text-align: center;
            translate: 990px;
            padding:10px 20px;
            margin:20px 30px;
            position:relative;
            bottom:260px;
          
        }
        #max{
            border:2px solid blue;
            height:100px;
            width:100px;
            border-radius: 100%;
            text-align: center;
            translate: 990px;
            padding:10px 20px;
            margin:20px 30px;
            position:relative;
            bottom:260px;
           
        }
        #image{
         
            height: 100px;
            width:100px;
            margin:20px 30px;
            background-image: url("data:image/jpeg;base64,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");
            background-size: cover;
            position:relative;
            top:100px;
        }
        #circle{
         
         height: 100px;
         width:100px;
         margin:20px 30px;
         background-image: url("data:image/jpeg;base64,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");
         background-size: cover;
         position:relative;
         top:100px;
     }
     #color{
         
         height: 100px;
         width:100px;
         margin:20px 30px;
         background-image: url("data:image/jpeg;base64,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");
         background-size: cover;
         position:relative;
         top:100px;
     } 
    </style>
</head>
<body>

  <div id="image"></div>
  <div id="circle"></div>
  <div id="color"></div>
   
  
    <div id="rio">red </div>
    <div id="lio">yellow </div>
    <div id="max">blue </div>








<script>
    let image=document.getElementById("image")
    image.addEventListener('click',()=>{
        image.style.translate="910px"
        let rio=document.getElementById("rio")
        rio.style.backgroundColor="red"
        })

       
        let circle=document.getElementById("circle")
        circle.addEventListener('click',()=>{
        circle.style.translate="910px"
        let lio=document.getElementById("lio")
        lio.style.backgroundColor="yellow"
        })

        let color=document.getElementById("color")
        color.addEventListener('click',()=>{
        color.style.translate="910px"
        let max=document.getElementById("max")
        max.style.backgroundColor="blue"
        })
    


</script>
    
</body>
</html>
