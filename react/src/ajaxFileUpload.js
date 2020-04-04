import $ from "jquery";

export default function AjaxFileUpload(func, accountId, file, callback) {
    var formData = new FormData();
    formData.append('file', file);
    formData.append('accountId', accountId);
    formData.append('function', func);

    console.log(file);
    $.ajax({
        url: '../../php/ajax.php',  //Server script to process data
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        cache: false,
        //Ajax events
        success: callback,
        error: function(jqXHR, exception){console.log('file upload FAIL');}
    });
}