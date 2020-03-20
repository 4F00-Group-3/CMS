// jQuery.post(
//     ajaxurl, 
//     {
//         _ajax_nonce: nonce,
//         'action': 'upvote_downvote_comment',
//         'operation': operation, //whether to upvote or downvote
//         'comment_id': commentID,
//         cache: false,
//     }, 
//     function(response) {
//         // show number of likes if not zero
//         if(response > 0){
//             clickedElement.siblings('.upvote-count').text(response);
//         } else {
//             clickedElement.siblings('.upvote-count').text('');
//         }

//         // reassign onclicks after 5 seconds so the user can continue to upvote or downvote (prevents spam clicking like/dislike)
//         window.setTimeout(function(){
//             jQuery('.upvote').click(upvoteClick);
//             jQuery('.downvote').click(downvoteClick);
//             jQuery('.upvote, .downvote').hover(userAjaxCompleteCursor);
//         }, 5000);
        
        
//     }
// );

export function hello() {
    return "Hello";
}