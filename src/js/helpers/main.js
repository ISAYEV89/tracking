/* DOCUMENT INFORMATION
 - Document: Theme_Name
 - Version:  1.0.0
 - Client:   Client_Name
 - Author:   Emin Azeroglu
 */

require('select2');
require('jquery.scrollbar');
require('bootstrap-datepicker');
import InputMask from 'inputmask'

$ ( function () {

    /* Only Number */
    $('body').on('input', '.only-number', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    /* Input Mask */
    $(document).ready(function () {
        const imask = new InputMask('\\9\\94 99 999 99 99');
        imask.mask('[data-mask]');
    });

    $('.datepicker').datepicker({
        autoclose: true,
        format: 'dd-mm-yyyy'
    });

    $('.select2').select2();

    $('.scrollbar-macosx').scrollbar();



    ////// index number animation

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    ///// popup

    function showPopup(whichpopup){
        var docHeight = $(document).height();
        var scrollTop = $(window).scrollTop();
        $('.overlay-bg').show().css({'height' : docHeight});
        $('.popup'+whichpopup).show()//.css({'top': scrollTop+20+'px'});
    }
    // function to close our popups
    function closePopup(){
        $('.overlay-bg, .overlay-content').hide();
    }
    $('.show-popup').click(function(event){
        event.preventDefault();
        var selectedPopup = $(this).data('showpopup');
        showPopup(selectedPopup);
    });
    $('.close-btn, .overlay-bg').click(function(){
        closePopup();
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            closePopup();
        }
    });


    //////// validate


    $('#add-form, #login-form').validate({

      messages: {
     /*   text: {
          required: "This field is required.",
        },*/

     /*   email: {
          required: 'bölmə doldurulmalıdır'
        }*/
      },

     /* submitHandler: function(){
        alert('sizinle elaqe saxlanilacaq')
      }
*/


    });

//////////////////

    ////group input

    $(document).on('focusin', '.group__input', function () {
        $(this).siblings('label').addClass('active')
        $(this).addClass('active');
    });

    $(document).on('focusout', '.group__input', function () {
        let $this = $(this);
        let value = $(this).val();
        if (value.length === 0) {
            $this.siblings('label').removeClass('active')
            $(this).removeClass('active');
        }
    });


    //////////// login

    $('.passImg').click(function () {

        let checkTypeInput = $(this).siblings().attr('type');
        // $(this).siblings('input').focus();

        if(checkTypeInput == 'password') {
            $(this).siblings('input').attr('type', 'text');
            // $(this).parent('img').attr('src', )
        }else{
            $(this).siblings('input').attr('type', 'password');
        }
    })


    ////// user input image

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.input-image').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#addImg").change(function(){
        readURL(this);
    });

});
