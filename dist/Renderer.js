class Renderer{
    render(data){
        $('div').empty()
     /*    let source = $('#entry-template').html()
        let template = Handlebars.compile(source)

        let compiled = template(data)
        $('.data').append(compiled) */
        for(let d of data){
        $('.data').append(`
         <div class ='title'>
       <a href= '${d.href}'> ${d.title} </a>
       <br><br>
       <img src= '${d.thumbnail}'>
       Ingredients:
          <br><br>
          </div>
        `)
        for(let i of d.ingredients){
        $('.title').append(`
        
         <ul class= 'ingredients'>
         <li>${i}</li>
         </ul>
        `)
        }
        }
    }
}

