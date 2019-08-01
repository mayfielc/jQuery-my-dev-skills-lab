$('#addItem').click(function(evt) {
    let input = $('input').val();
    let addRow = `<tr>
                   <td><button class="del">X</button></td>
                   <td>${input}</td>
                   </tr>`;
    $('#table').append(addRow);
})

$('#table').on('click', 'button', function() {
    let row = $(this).closest('tr');
    row.remove();
})