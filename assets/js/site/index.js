$(document).ready(()=>{

    //global variables
    let named ='',province ='', city = '', sector ='', street ='', career ='',varNex = 1,num=0,r = '';

    //objects and arrays
    let careerClass = {0: ["Programing 1","Programing 2","Web programing","User centered design","Programing 3"],1: ["Ethical hacking 1","Ethical hacking 2","Ethical 1","Operation system 1","Operation system 2"],2: ["Networks introductions","Operation system 1","Operation system 2","Electronic","Computing fundamentals"]}

    let radioValues = ["Monday","Thursday","Friday"]

    let finalConfirmationOject = {0:[],1:[],2:[]}

    //hide
    $("#container-selectClass").hide();
    $("#container-confirmation").hide();

    //events
    $("#next").on("click",()=>{next();})
    $("#clear").on("click",()=>{clean();})
    $("#back1").on("click", ()=>{
        $("#container-selectClass").hide();
        $("#container-index").show();
        varNex = 1;
    })

    //function 
    function validate(){
        let validate = true
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
            }
        }
        return validate
    } 

    function clean(){
        const listClean = ["#named","#province","#city","#sector","#street","#career"]

        for(i in listClean){
            $(`${listClean[i]}`).val("").removeClass("border border-2 border-danger shadow").removeClass("border border-2 border-success");
        }
        $(`${listClean[0]}`).focus();
    }

    function insertTablaSelectClass(){
        switch (career) {
            case "Software Development":
                num = 0;
                break;
            case "Cybersecurity":
                num = 1;
                break;
            case "Networks":
                num = 2;
                break;
            default:
                break;
        }

        for(let i=0; i<careerClass[num].length;i++){
            let rows = `
                    <tr>
                        <th>${careerClass[num][i]}</th>
                        <th id="thCId${i}"><input type="checkbox" value="true" name="" id="selectClass${[i]}"></th>
                        <th id="thRId${i}">
                            <label>Monday - 9:00am/11:50am <input type="radio" value="${radioValues[0]}" name="classR${[i]}"}"></label> | 
                            <label>Thursday - 12:00pm/5:50pm <input type="radio" value="${radioValues[1]}" name="classR${[i]}"></label> | 
                            <label>Friday - 6:00pm/10:50pm <input type="radio" value="${radioValues[2]}" name="classR${[i]}"></label>
                        </th>
                    </tr>
            `
            $("#tbodySC").append(rows);
        }
    }

    function insertFinalData(){
        let arrays = []
        for(let i=0; i<careerClass[num].length;i++){
            r = $(`#thRId${i} input[type='radio']:checked`).val();
            if( r == radioValues[0] || r == radioValues[1] || r == radioValues[2] ){
                arrays.push(r) 
            }
        }
        finalConfirmationOject[num] = arrays
        console.log(finalConfirmationOject[num])
    }

    function next(){
        if(varNex===3){
            insertFinalData();
            
        }
        if(varNex===2){
            varNex = 3
            $("#container-index").hide();
            $("#container-selectClass").show();
            insertTablaSelectClass();
        }
        if(varNex === 1){
            if(validate()){
                varNex = 2
                next();
            }else{
                alert("check the red rectangle");
            }
        }
    }
})

