$(document).ready(function(){
    var passwordSubmit = {
        length: false,
        letter: false,
        capLetter: false,
        number: false,
        space: false,
        repeat: false
    };
	
	$('input[id=paw]').keyup(function() {
		var pswd = $(this).val();
		//validate the length
		if ( pswd.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
            passwordSubmit.length = false;
		} else {
            $('#length').removeClass('invalid').addClass('valid');
            passwordSubmit.length = true;
		}
		
		//validate letter
		if ( pswd.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
            passwordSubmit.letter = false;
		} else {
            $('#letter').removeClass('valid').addClass('invalid');
            passwordSubmit.letter = true;
		}

		//validate capital letter
		if ( pswd.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
            passwordSubmit.capLetter = false;
		} else {
            $('#capital').removeClass('valid').addClass('invalid');
            passwordSubmit.capLetter = true;
		}

		//validate number
		if ( pswd.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
            passwordSubmit.number = false;
		} else {
            $('#number').removeClass('valid').addClass('invalid');
            passwordSubmit.number = true;
		}
		
		//validate space
		if ( pswd.match(/[^a-zA-Z0-9\-\/]/) ) {
            $('#space').removeClass('invalid').addClass('valid');
            passwordSubmit.space = false;
		} else {
            $('#space').removeClass('valid').addClass('invalid');
            passwordSubmit.space = true;
		}
		
	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
    });
    
      $('input[id=checkPass]').keyup(function () {
            var pswd = $(this).val();
            var firstPswd = $('input[id=paw]').val();
            //validate 
            if (pswd != firstPswd ) {
                  $('#same').removeClass('valid').addClass('invalid');
                  passwordSubmit.repeat = false;
            } else {
                  $('#same').removeClass('invalid').addClass('valid');
                  passwordSubmit.repeat = true;
            }

      }).focus(function () {
            $('.chck_pswd').show();
      }).blur(function () {
            $('.chck_pswd').hide();
      });

    $('input[type=submit]').click(function (event) {
        if (!(passwordSubmit.length||passwordSubmit.capLetter||passwordSubmit.letter||passwordSubmit.number||passwordSubmit.space)) {
            event.preventDefault();
            $('input[id=paw]').focus();
        }
        if (!passwordSubmit.repeat) {
            event.preventDefault();
            $('input[id=checkPass]').focus();
        }
       if (!($('#agree').prop('checked'))) {
             event.preventDefault();
              $('#agree').focus();
        }



    });
	
});