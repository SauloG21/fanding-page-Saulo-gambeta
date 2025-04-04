function getProjects(){
    const urlGitHub = 'https://api.github.com/users/SauloG21/repos' //LINK REPOSITÓRIO << CÓDIGO PARA PUXAR PROJETOS DO GITHUB https://github.com/SauloG21?tab=repositories e https://api.github.com/users/SauloG21/repos
    var loandingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.dysplay = 'none' 
            console.log(response)
            showProjects(response)
        })
        .catch((e) => {
            console.log(e)
        })
}

//mostrar repositorios

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')

    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }

}

getProjects ()


