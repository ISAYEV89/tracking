/* DOCUMENT INFORMATION
 - Document: Theme_Name
 - Version:  1.0.0
 - Client:   Client_Name
 - Author:   Emin Azeroglu
 */

export default {
    /* OutClick */
    OutClick(params) {
        $('*').click(function (e) {
            if (!$(e.target).is(params.element) &&
                !$(e.target).is(params.element + ' *') &&
                !$(e.target).is(params.button) &&
                !$(e.target).is(params.button + ' *')
            ) {
                if (params.callback) {
                    params.callback();
                }
            }
        });
    },

    /* Loading Block Close */
    LoadingBlockClose (){
        const block = $('.app-loading');
        block.fadeOut(200);
    },

    /* Loading Block Open */
    LoadingBlockOpen () {
        const block = $('.app-loading');
        block.fadeIn(200);
    }
}
