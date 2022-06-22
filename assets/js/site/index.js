$(document).ready(()=>{
    //global variables
    let named ='',province ='', city = '', sector ='', street ='', career ='',varNex = 1;

    //events
    $("#next").on("click",()=>{
        if(varNex===3){
        }
        if(varNex===2){
            varNex = 3
        }
        if(varNex === 1){
            if( validate()){
                varNex = 2
                alert("works")
            }else{
                alert("check the red rectangle");
            }
        }
    })

    $("#clear").on("click",()=>{
        clean();
    })

    //function 
    const validate = ()=>{
        let validate = false
        named = $("#named").val();province = $("#province").val();city = $("#city").val();sector= $("#sector").val();street = $("#street").val();career = $("#career").val();

        const objectForm = {0:["#named",named],1:["#province",province],2:["#city",city],3:["#sector",sector],4:["#street",street], 5:["#career",career]}

        for (i in objectForm) {
            //null validation
            if(objectForm[i][1] == "" || objectForm[i][1] == null || objectForm[i][1] == undefined){
                $(`${objectForm[i][0]}`).addClass("border border-2 border-danger shadow");
                validate = false
            }else{
                $(`${objectForm[i][0]}`).removeClass("border border-2 border-danger shadow");
                $(`${objectForm[i][0]}`).addClass("border border-2 border-success");
                validate = true
            }
        }
        return validate
    } 

    const clean = ()=>{
        const listClean = ["#named","#province","#city","#sector","#street","#career"]

        for(i in listClean){
            $(`${listClean[i]}`).val("").removeClass("border border-2 border-danger shadow").removeClass("border border-2 border-success");
        }
        $(`${listClean[0]}`).focus();
    }
})