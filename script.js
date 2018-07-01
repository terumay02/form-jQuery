$(function() {
  $('#form').submit(function() {
    var selectValue = $('#select-form').val();
    var textValue = $('#text-form').val();
    
    // textValueが空のとき、エラー文を表示してください
    
    
    $('#output-select').text(selectValue);
    $('#output-text').text(textValue);
    return false;
  });
});
