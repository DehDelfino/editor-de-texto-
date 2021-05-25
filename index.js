var showingSourceCode = false
var isInEditMode = true


function enabledEdit (){
  richTextFiled.document.designMode = "on"
}

function exCmd (command){
  richTextFiled.document.execCommand(command, false, null)
}
function exCmdWArg(command , argument){

  richTextFiled.document.execCommand(command, false, argument)
}

function toggleSource() { 
  if(showingSourceCode){
    richTextFiled.document.getElementsByTagName('body')[0].innerHTML = richTextFiled.document.getElementsByTagName('body')[0].textContent
    showingSourceCode = false
  }else{
    richTextFiled.document.getElementsByTagName('body')[0].textContent = richTextFiled.document.getElementsByTagName('body')[0].innerHTML
    showingSourceCode =true
  }

}

function toggleEdit(){
  if(isInEditMode){
    richTextFiled.document.designMode = "off"
    isInEditMode = false
  }else{
    richTextFiled.document.designMode = "on"
    isInEditMode =true
  }
}

