function SearchCallback() {

  var data = arguments[0];
  var html = $('#tmpl').html();
  var searchField = $('#searchField');
  data.query = searchField.val();

  var content = tmpl(html, data);
  console.log(data);
  $('.searchResult').html('');
  $('.searchResult').append(content);

  searchField.val('');
}
$(function() {


  function Search(query) {
    $.ajax({
      url: 'https://pixabay.com/api/?key=2578289-585e40fcdc72ec40162cd6356&q=' + query + '&image_type=photo&per_page=5&callback=SearchCallback&context=?',
      dataType: 'jsonp'
    });
  }

  $('.searchButtom').click(function() {
    var query = $('#searchField').val();
    Search(query);
  });

  $('body').keydown(function(e) {
    if (e.keyCode == 13) {
      var query = $('#searchField').val();
      e.preventDefault();
      Search(query);
    }
  });
});
