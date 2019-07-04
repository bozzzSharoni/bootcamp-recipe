$('button').click(function () {
    let ingredient = $('input').val().toLowerCase()
    $.get(`/recipes/${ingredient}`)
        .then(function (res) {
            let data = []
            for (let r of res) {
                data.push({ title: r.title, ingredients: r.ingredients, thumbnail: r.thumbnail, href: r.href })
            }

            console.log(data)
            const renderer = new Renderer
            renderer.render(data)

        })
})