//This is where our ad interactivity code will live.

//this function runs on page load
window.onload = function (event){

	//here we store the cta button in a variable
	var cta = document.getElementById("cta");
    
    var time = 800;
    
    var _titles = [
        "Nimemaliza Shule Kitambo tu",
        "Kazi Hamna mpaka sasa",
        "Nataka Kazi FASTA",
        "Nenda Ka Apply Leo Leo Plus",
    ];
     
    for(i = 0 ; i < _titles.length ; i++){
            console.log(i);
            console.log(_titles[i]);
            animate_title(_titles[i] , "bounceIn" , i * 2.5);

    }
          
    
    function animate_title(message ,animation , i){
        
        setTimeout(function(){
            document.querySelector('.title').innerHTML = "<div class='animated " + 
            animation +"'>" + message+"</div>";
            //setTimeout(animation_terminate , 300);
            
        } , time * (i + 2));
        
    }
    
    function animation_terminate(){
        document.querySelector('.title').setAttribute("class", "animated bounceOut");
    }

/*	AdWords Exit: here we listen for CTA clicks and call ExitApi.exit()
	*/
	cta.addEventListener("click", ExitApi.exit);

}