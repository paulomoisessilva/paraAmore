$(function(){
    var url = "https://script.google.com/macros/s/AKfycby-hvRIPAi9D54iIikhheREGgTRfg5BrvI5Pnb1R1_spscYD3Wq/exec"
    axios.get(url)
        .then(resp => resp.data)
        .then(dados => addP(dados))
        .then(d => {
            sucesso()
            $("#nome").val("")
            $("#idade").val("")
        })
        .catch(function (error) {
            console.error(error)
            erro()
            return
        })
})

function addURL(url) {
    axios.get(url, {
        method: 'post',
        params: {
            nome: $("#nome").val(),
            idade: $("#idade").val()
        }
    })
        .then(resp => resp.data)
        .then(dados => addP(dados))
        .then(d => {
            sucesso()
            $("#nome").val("")
            $("#idade").val("")
        })
        .catch(function (error) {
            console.error(error)
            erro()
            return
        })
}

function addP(pessoas) {
    var ii = pessoas.reduce(
        (html, pessoa) => html + `<li> O cliente ${pessoa.NOME} tem ${pessoa.IDADE} anos.</li>`, ''
    )
    $("#adds").html(ii)
}

$(function () {
    $("#addI").on("click", function () {

    })
})
function salvar(e) {
    e.preventDefault()
    var nome = $("#nome").val()
    var idade = $("#idade").val()

    $("#nome, #idade").attr('readonly', true)

    if (nome != "" & idade != "") {
        var url = $("#addI").attr("url").valueOf()
        addURL(url)
    } else {
        erro()
    }

    return false
}
function erro() {
    $("#nome, #idade").attr('readonly', false)
    $("#falha").animate({
        height: 'show'
    })
    setTimeout(function () {
        $("#falha").animate({
            height: 'hide'
        })
    }, 3000)
}
function sucesso() {
    $("#nome, #idade").attr('readonly', false)
    $("#sucesso").animate({
        height: 'show'
    })

    setTimeout(function () {
        $("#sucesso").animate({
            height: 'hide'
        })
    }, 3000)
}