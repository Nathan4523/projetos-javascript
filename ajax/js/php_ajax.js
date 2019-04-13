$(function () {
    $('#formulario').submit(function () {
        var dados = $('#formulario').serialize()
        $.ajax({
            type: 'post',
            url: 'php/php_ajax.php',
            dataType: 'html',
            data: dados,
            success: function () {
                console.log('deu certo')
                console.log(dados)

                $('#nome').innerHTML = ""
            },
            error: function () {
                console.log('deu errado')
            }
        })
        return false
    })
})

