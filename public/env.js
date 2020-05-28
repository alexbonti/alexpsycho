const urlAnalyze='/analyze'

let analyze=function(doc){
  $.get(urlAnalyze,{text:doc},function(result){
    console.log(JSON.parse(result))
    $('#output').val(JSON.parse(result).result.originalText)

  })
}

$(document).ready(function(){
  console.log('Ready')
  $('#analyze').click(function(){
    let input=$('#input').val();
    console.log(input)
    analyze(input)
  })

})
