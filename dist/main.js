$('button').click(function () {
    let ingredient = $('input').val().toLowerCase()
    $.get(`/recipes/${ingredient}`)
        .then(function (res) {
            let data = []
            for(let r of res){
                data.push(r.title,r.ingredients, r.thumbnail, r.href)
            }
            
            console.log(data)
        })
})