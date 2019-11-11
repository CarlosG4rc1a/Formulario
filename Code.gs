//Triggered when the page is navigated to, serves up HTML
function doGet(){
 var template = HtmlService.createTemplateFromFile('index');
 return template.evaluate()
 .setTitle('Example App')
 .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
//Called from the client with form data, basic validation for blank values
function formSubmit(formData){
 for(var field in formData){
 if(formData[field] == ''){
 return {success: false, message: field + ' Cannot be blank'}
 }
 }
 return {success: true, message: 'Sucessfully submitted!'};
}
