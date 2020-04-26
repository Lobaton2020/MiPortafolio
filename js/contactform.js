jQuery(document).ready(function($) {
    "use strict";

    //Contact
    $('form.contactForm').submit(function() {

        var f = $(this).find('.form-group'),
            ferror = false,
            emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

        f.children('input').each(function() { // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if (rule !== undefined) {
                var ierror = false; // error flag for current input
                var pos = rule.indexOf(':', 0);
                if (pos >= 0) {
                    var exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }

                switch (rule) {
                    case 'required':
                        if (i.val() === '') { ferror = ierror = true; }
                        break;

                    case 'minlen':
                        if (i.val().length < parseInt(exp)) { ferror = ierror = true; }
                        break;

                    case 'email':
                        if (!emailExp.test(i.val())) { ferror = ierror = true; }
                        break;

                    case 'checked':
                        if (!i.attr('checked')) { ferror = ierror = true; }
                        break;

                    case 'regexp':
                        exp = new RegExp(exp);
                        if (!exp.test(i.val())) { ferror = ierror = true; }
                        break;
                }
                i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });
        f.children('textarea').each(function() { // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if (rule !== undefined) {
                var ierror = false; // error flag for current input
                var pos = rule.indexOf(':', 0);
                if (pos >= 0) {
                    var exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }

                switch (rule) {
                    case 'required':
                        if (i.val() === '') { ferror = ierror = true; }
                        break;

                    case 'minlen':
                        if (i.val().length < parseInt(exp)) { ferror = ierror = true; }
                        break;
                }
                i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });
        if (ferror) {
            return false;

        } else {
            var str = $(this).serialize();
            return true;
            //     $.ajax({
            //         type: "POST",
            //         url: "http://alobaton.000webhostapp.com/formHeroku/envioDatos.php",
            //         data: str,
            //         success: function(msg) {

            //             if (msg) {

            //                 $("#sendmessage").addClass("show");
            //                 $("#errormessage").removeClass("show");

            //                 document.querySelector('form.contactForm').name.value = "";
            //                 document.querySelector('form.contactForm').email.value = "";
            //                 document.querySelector('form.contactForm').subject.value = "";
            //                 document.querySelector('form.contactForm').message.value = "";



            //             } else {
            //                 $("#sendmessage").removeClass("show");
            //                 $("#errormessage").addClass("show");
            //                 $('#errormessage').html(msg);
            //             }

            //         },
            //         error: function() {

            //             $("#sendmessage").addClass("show");
            //             $("#errormessage").removeClass("show");
            //             console.log("Hubo un error, al parecer el mensaje se envio");
            //             document.querySelector('form.contactForm').name.value = "";
            //             document.querySelector('form.contactForm').email.value = "";
            //             document.querySelector('form.contactForm').subject.value = "";
            //             document.querySelector('form.contactForm').message.value = "";
            //         }
            //     });
            //     return false;
        }
    });

});